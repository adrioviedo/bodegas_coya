import { useState } from 'react'
import { Magnifier } from '../icons/Magnifier'

export const Search = ({ formClass, inputClass }) => {
  const [query, setQuery] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault() // Prevenir el envío por defecto del formulario
    const formData = new FormData(event.target)
    const searchQuery = formData.get('search')
    if (!searchQuery) return // Si el query está vacío, no hacer nada
    window.location.href = `/productos?search=${searchQuery}`
  }

  const handleChange = (event) => {
    const newQuery = event.target.value
    if (newQuery.startsWith(' ')) return
    setQuery(newQuery)
  }

  return (
    <form action="/productos" onSubmit={handleSubmit} method="get" className={formClass}>
      <input
        onChange={handleChange}
        value={query}
        type="text"
        name="search"
        placeholder="Buscar"
        className={inputClass}
      />
      <button type="submit" className="hover:scale-125 transition">
        <Magnifier clase="w-4 h-4 md:w-6 md:h-6" />
      </button>
    </form>
  )
}

import { useState } from 'react'
import { Magnifier } from '../icons/Magnifier'

export const Search = ({ formClass, inputClass }) => {
  const [query, setQuery] = useState('')

  const handleSubmit = (event) => {
    const { query } = Object.fromEntries(new window.FormData(event.target))
    if (!query) {
      event.preventDefault()
    }
  }
  const handleChange = (event) => {
    const newQuery = event.target.value
    if (newQuery.startsWith(' ')) return
    setQuery(event.target.value)
  }

  return (
    <form action="/productos" onSubmit={handleSubmit} method="get" className={formClass}>
      <input
        onChange={handleChange}
        value={query}
        type="text"
        name="search"
        placeholder="Buscar"
        className={` ${inputClass}`}
      />
      <button type="submit" className="hover:scale-125 transition ">
        <Magnifier clase="w-4 h-4 md:w-6 md:h-6" />
      </button>
    </form>
  )
}

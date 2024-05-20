import { useState, useEffect, useCallback } from 'react'
import { Products } from './Products'
import { Aside } from './Aside'
import { useProducts } from '../hooks/useProducts'
import { useCategories } from '../hooks/useCategories'
import { ProductsTitle } from './ProductsTitle'

export const Categoria = () => {
  const [category, setCategory] = useState({})
  const [denomination, setDenomination] = useState('')
  const [denominations, setDenominations] = useState([])
  const { products, loading: loadingProducts, error: errorProducts } = useProducts()
  const { categories, loading: loadingCategories, error: errorCategories } = useCategories()
  const [search, setSearch] = useState('')

  // Efecto para actualizar la categoría y la denominación basada en la URL
  useEffect(() => {
    if (typeof window === 'undefined') return

    const params = new URLSearchParams(window.location.search)
    const newSearch = params.get('search')
    const categoryId = params.get('category')
    const newDenomination = params.get('denomination')

    setSearch(newSearch || '')

    if (categories.length > 0) {
      const newCategory = categories.find(categoria => categoria.id === categoryId) || {}
      setCategory(newCategory)
      setDenomination(newDenomination || '')
      setDenominations(newCategory.denominations || [])
    }
  }, [categories])

  // Efecto para manejar la navegación del historial (popstate)
  useEffect(() => {
    const handlePopState = () => {
      const params = new URLSearchParams(window.location.search)
      const newSearch = params.get('search')
      const categoryId = params.get('category')
      const newDenomination = params.get('denomination')

      setSearch(newSearch || '')

      if (categories.length > 0) {
        const newCategory = categories.find(categoria => categoria.id === categoryId) || {}
        setCategory(newCategory)
        setDenomination(newDenomination || '')
        setDenominations(newCategory.denominations || [])
      }
    }

    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [categories])

  // Actualiza la URL y el estado del componente
  const updateURL = useCallback((params) => {
    if (typeof window === 'undefined') return
    const newURL = `${window.location.pathname}?${params.toString()}`
    window.history.pushState({}, '', newURL)
  }, [])

  // Maneja el cambio de categoría
  const handleCategoryChange = useCallback((newCategory) => {
    if (!newCategory || category.id === newCategory.id) return

    const params = new URLSearchParams(window.location.search)
    params.set('category', newCategory.id)

    if (newCategory.denominations) {
      params.set('denomination', newCategory.denominations[0].id)
    } else {
      params.delete('denomination')
    }
    params.delete('search')

    updateURL(params)
    setCategory(newCategory)
    setDenomination(newCategory.denominations ? newCategory.denominations[0].id : '')
    setDenominations(newCategory.denominations || [])
  }, [category.id, updateURL])

  // Maneja el cambio de denominación
  const handleDenominationChange = useCallback((newDenomination) => {
    if (!newDenomination || denomination === newDenomination) return

    const params = new URLSearchParams(window.location.search)
    params.set('denomination', newDenomination)

    updateURL(params)
    setDenomination(newDenomination)
  }, [denomination, updateURL])

  return (
    <div className="flex flex-col lg:flex-row w-4/5 mx-auto my-12 gap-10 text-[#261B0C]">
      {loadingCategories
        ? (
        <p>Cargando categorías...</p>
          )
        : errorCategories
          ? (
        <p>Error al cargar categorías: {errorCategories}</p>
            )
          : (
        <Aside categories={categories} handleCategoryChange={handleCategoryChange} />
            )}
      <section className="flex flex-col gap-5 w-full">
        <ProductsTitle
          category={category}
          denominations={denominations}
          handleDenominationChange={handleDenominationChange}
          search={search}
        />
        {loadingProducts
          ? (
          <p>Cargando productos...</p>
            )
          : errorProducts
            ? (
          <p>Error al cargar productos: {errorProducts}</p>
              )
            : (
          <Products products={products} />
              )}
      </section>
    </div>
  )
}

/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react'
import categorias from '../data/categorias.json'
import { Products } from './Products.jsx'
import { Aside } from './Aside'
import { useProducts } from '../hooks/useProducts.jsx'
import { ProductsTitle } from './ProductsTitle.jsx'

export const Categoria = () => {
  const [category, setCategory] = useState({})
  const [denomination, setDenomination] = useState('')
  const [denominations, setDenominations] = useState()
  const products = useProducts()
  const [search, setSearch] = useState()

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search)
      const newSearch = params.get('search')
      setSearch(newSearch)
      if (newSearch) return
      const newCategory = categorias.find(
        (categoria) => categoria.id === params.get('category')
      )
      setCategory(newCategory)
      setDenomination(params.get('denomination') || '')
      if (newCategory) {
        newCategory.denominations
          ? setDenominations(newCategory.denominations)
          : setDenominations()
      }
    }
  }, [])

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search)
      const newCategory = categorias.find(
        (categoria) => categoria.id === params.get('category')
      )
      setCategory(newCategory || categorias[0])
      setDenomination(params.get('denomination') || '')
      if (newCategory) {
        newCategory.denominations
          ? setDenominations(newCategory.denominations)
          : setDenominations()
      }
    }
  }, [typeof window !== 'undefined' ? window.location.search : ''])

  const handleCategoryChange = (newCategory) => {
    if (!newCategory || category.id === newCategory.id) return

    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search)
      params.set('category', newCategory.id)
      if (newCategory.denominations) {
        params.set('denomination', newCategory.denominations[0].id)
      } else {
        params.delete('denomination')
      }
      params.delete('search') // Elimina el parámetro 'search'
      window.location.replace(
        `${window.location.pathname}?${params.toString()}`
      )
    }
  }

  const handleDenominationChange = (newDenomination) => {
    if (!newDenomination || denomination === newDenomination) return

    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search)
      params.set('denomination', newDenomination)
      window.location.replace(
        `${window.location.pathname}?${params.toString()}`
      )
    }
  }

  return (
    <div class="flex flex-col lg:flex-row w-4/5 mx-auto my-12 gap-10 text-[#261B0C]">
      <Aside
        categories={categorias}
        handleCategoryChange={handleCategoryChange}
      />
      <section className="flex flex-col gap-5 w-full">
        <ProductsTitle
          category={category}
          denominations={denominations}
          handleDenominationChange={handleDenominationChange}
          search={search}
        />

        <Products products={products} />
      </section>
    </div>
  )
}

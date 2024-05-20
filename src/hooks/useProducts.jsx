import { useState, useEffect } from 'react'

export const useProducts = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchProducts = async () => {
      if (typeof window === 'undefined') {
        return
      }

      setLoading(true)
      setError(null)

      try {
        const params = new URLSearchParams(window.location.search)
        const query = `/api/bbdd/products?${params.toString()}`

        const response = await fetch(query)
        if (!response.ok) {
          throw new Error('Error al obtener los productos')
        }

        const data = await response.json()
        setProducts(data)
      } catch (error) {
        setError(error.message)
      } finally {
        setLoading(false)
      }
    }

    fetchProducts()
  }, [typeof window !== 'undefined' ? window.location.search : ''])

  return { products, loading, error }
}

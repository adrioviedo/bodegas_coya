import { useState, useEffect } from 'react'

export const useCategories = () => {
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchCategories = async () => {
      if (typeof window === 'undefined') {
        return
      }

      setLoading(true)
      setError(null)

      try {
        const response = await fetch('/api/bbdd/categories')
        if (!response.ok) {
          throw new Error('Error al obtener las categorías')
        }

        const data = await response.json()
        setCategories(data)
      } catch (error) {
        setError(error.message)
      } finally {
        setLoading(false)
      }
    }

    fetchCategories()
  }, [])

  return { categories, loading, error }
}

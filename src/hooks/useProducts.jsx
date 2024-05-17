import productos from '../data/productos.json'

export const useProducts = () => {
  let products = []

  if (typeof window !== 'undefined') {
    const params = new URLSearchParams(window.location.search)
    let category = params.get('category')
    const denomination = params.get('denomination')
    const search = params.get('search')

    console.log('category:', category)
    console.log('denomination:', denomination)
    console.log('search:', search)

    if (search) {
      products = productos.filter(product => product.name.toLowerCase().includes(search.toLowerCase()))
    } else {
      if (!category) {
        category = 'marcas-propias'
        products = productos.filter(product => product.category === category)
      } else {
        if (denomination) {
          products = productos.filter(product => product.category === category && product.denomination === denomination)
        } else {
          products = productos.filter(product => product.category === category)
        }
      }
    }
  }
  return products
}

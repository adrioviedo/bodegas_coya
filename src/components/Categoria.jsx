import data from '../productos/products.json'
import { useEffect, useState } from 'react'
import { Products } from './Products'

export const Categoria = ({ categoryId }) => {
  const category = data.find((category) => category.id === categoryId)
  const denominations = category?.denominations

  if (!denominations) {
    return (
      <section className="flex flex-col gap-5 w-full">
        <h1 className="categoryTitle font-Anton text-6xl">{category.category}</h1>
        <Products products={category.products} />
      </section>
    )
  }

  const [selectedDenomination, setSelectedDenomination] = useState(denominations[0])
  const [products, setProducts] = useState(selectedDenomination.products)

  useEffect(() => {
    setProducts(selectedDenomination.products)
  }, [selectedDenomination])

  return (
     <section className="flex flex-col gap-5 w-full">
       <h1 className="categoryTitle font-Anton text-6xl">{category.category}</h1>
       <ul className="flex gap-3 flex-wrap">
       {
         denominations.map((denomination) => (
           <li className="px-2 py-1 rounded-xl hover:bg-[#450408] hover:text-[#FFE6BB] cursor-pointer transition"
                onClick={() => setSelectedDenomination(denomination)}
           >
             {denomination.denomination}
           </li>
         ))
       }
     </ul>
      <Products products={products} />
   </section>

  )
}

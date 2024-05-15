import data from '../data/products.json'
import { useEffect, useState } from 'react'
import { Products } from './Products.jsx'
import { Aside } from './Aside'

export const Categoria = () => {
  const [category, setCategory] = useState(data[0])
  const [denominations, setDenominations] = useState()
  const [selectedDenomination, setSelectedDenomination] = useState()
  const [products, setProducts] = useState(category.products)

  const handleCategoryChange = (category) => {
    setCategory(category)
    if (category.denominations) {
      setDenominations(category.denominations)
      setSelectedDenomination(category.denominations[0])
    } else {
      setDenominations()
      setSelectedDenomination()
    }
  }

  useEffect(() => {
    if (selectedDenomination) {
      setProducts(selectedDenomination.products)
    } else {
      setProducts(category.products)
    }
  }, [category, selectedDenomination])

  return (
    <div class="flex flex-col lg:flex-row w-4/5 mx-auto my-12 gap-10 text-[#261B0C]">
      <Aside categories={data} handleCategoryChange={handleCategoryChange} />
      <section className="flex flex-col gap-5 w-full">
        <h1 className="categoryTitle font-Anton text-4xl lg:text-6xl">
          {category.category}
        </h1>
        {denominations
          ? (
          <ul className="flex gap-3 overflow-y-scroll lg:overflow-hidden">
            {denominations.map((denomination) => (
              <li
                key={denomination.id}
                className=" min-w-20 px-2 py-1 rounded-xl hover:bg-[#450408] hover:text-[#FFE6BB] cursor-pointer transition text-sm lg:text-2xl font-Anton2"
                onClick={() => setSelectedDenomination(denomination)}
              >
                {denomination.denomination}
              </li>
            ))}
          </ul>
            )
          : null}
        <Products products={products} />
      </section>
    </div>
  )
}

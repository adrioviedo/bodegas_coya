import { CartIcon } from '../icons/cartIcon.jsx'

export const Products = ({ products }) => {
  return (
    <div className="flex flex-wrap gap-8 w-full font-Roboto font-medium text-sm justify-center">
      {products.map((product) => (
        <article className="relative min-w-52 aspect-[4/5] bg-[#E5CDA6] rounded-xl  hover:scale-110 transition"
        key={product.id}
        >
          <img
            src={product.img}
            alt={product.name}
            className="absolute max-w-52 overflow-hidden"
          />
          <div className="absolute rounded-xl w-full bottom-0 text-pretty px-3 py-3 backdrop-blur-md flex items-center justify-between">
            <div className="flex flex-col min-w-[70%]">
              <span>{product.name}</span>
              <span>{product.price} €</span>
            </div>
            <button className="bg-[#450408] text-[#FFE6BB] rounded-xl px-2 py-1 cursor-pointer">
              <CartIcon className="w-6 h-6" />
            </button>
          </div>
        </article>
      ))}
    </div>
  )
}

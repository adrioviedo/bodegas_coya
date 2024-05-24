// eslint-disable-next-line no-unused-vars
import { useImg } from '../hooks/useImg.ts'
import { CartProvider } from '../context/cartContext.jsx'
import { CartIcon } from '../icons/cartIcon.jsx'
import { CartButton } from './CartButton.jsx'

const imgURL = 'https://sxgzvkgcpspymknjscwh.supabase.co/storage/v1/object/public'

export const Products = ({ products }) => {
  return (
    <div className="flex flex-wrap gap-8 w-full font-Roboto font-medium text-sm justify-center">
      {products.map((product) => (
        <article
          className="relative min-w-32 lg:min-w-52 aspect-[4/5] bg-[#E5CDA6] rounded-xl  hover:scale-110 transition"
          key={product.id}
        >
          <img
            src={useImg(product.img)}
            alt={product.name}
            className="absolute max-h-72 aspect-[4/5] object-cover overflow-hidden"
          />
          <div className="absolute rounded-xl w-full bottom-0 text-pretty px-3 py-3 backdrop-blur-md flex items-center justify-between">
            <div className="flex flex-col w-[60%]">
              <span className="font-Anton2 font-bold text-xs">
                {product.name}
              </span>
              <span className="text-xs">{product.price} €</span>
            </div>
            <CartProvider>
              <CartButton item={product} clase="w-4 h-4 md:w-6 md:h-6" />
            </CartProvider>
          </div>
        </article>
      ))}
    </div>
  )
}

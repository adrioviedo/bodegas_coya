import { useCart } from '../context/cartContext'
import { AddToCart } from '../icons/AddToCart'
import { RemoveFromCart } from '../icons/RemoveFromCart'
import { CartButton } from './CartButton'

export const Cart = () => {
  const { cartItems, clearCart, getCartTotal, addToCart, removeFromCart } =
    useCart()

  return (
    <div className="flex flex-col gap-6 mt-5 font-Roboto">
      <h2 className="mx-auto text-3xl font-Anton2 font-bold leading-none">
        Carrito
      </h2>
      <ul className="flex flex-col text-sm">
        {cartItems.map((item) => (
          <li key={item.id} className="flex justify-between flex-wrap">
            <div>
              <h3 className="font-bold">{item.name}</h3>
              <p>{item.price} €</p>
            </div>
            <CartButton item={item} clase="w-6 h-6" />
          </li>
        ))}
      </ul>
      <div className="flex flex-col gap-2 text-xs">
        <h2 className="font-Anton2 text-lg">
          Total: {getCartTotal()} €
        </h2>
        <div className="flex gap-3 justify-center">
          <button
            className="px-2 py-1 leading-loose  bg-[#450408] text-[#FFE6BB]  rounded-xl hover:bg-[#84181fb1] transition "
            onClick={() => {
              clearCart()
            }}
          >
            Vaciar carro
          </button>
          <form action="/pedido">
            <button
              type="submit"
              className="px-2 py-1 leading-loose  text-[#450408] rounded-xl bg-gray-50 hover:bg-gray-200 transition "
            >
              Realizar pedido
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

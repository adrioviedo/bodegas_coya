import { useCart } from '../context/cartContext'
import { AddToCart } from '../icons/AddToCart'
import { RemoveFromCart } from '../icons/RemoveFromCart'

export const Cart = () => {
  const { cartItems, clearCart, getCartTotal, addToCart, removeFromCart } =
    useCart()

  return (
    <div className="flex flex-col gap-6 mt-5 font-Roboto">
      <h2 className="mx-auto text-3xl font-Anton2 font-bold leading-none">
        Carrito
      </h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id} className='flex justify-between flex-wrap'>
            <div >
              <h3>{item.name}</h3>
              <p>{item.price} €</p>
            </div>
            <div className="flex gap-1 items-center text-[#E5CDA6]">
              <button
                className="p-0.5 bg-[#4504089e] rounded-md hover:bg-[#450408] transition"
                onClick={() => {
                  addToCart(item)
                }}
              >
                <AddToCart />
              </button>
              <span className="text-[#450408]">
                {cartItems.find((cartItem) => cartItem.id === item.id)
                  ?.quantity || 0}
              </span>
              <button
                className="p-0.5 bg-[#4504089e] rounded-md hover:bg-[#450408] transition"
                onClick={() => {
                  removeFromCart(item)
                }}
              >
                <RemoveFromCart />
              </button>
            </div>
          </li>
        ))}
      </ul>
      <div className="flex flex-col gap-2 text-xs">
        <h2>Total: {getCartTotal()} €</h2>
        <button
          className="mx-auto px-2 py-1 bg-[#450408] text-[#FFE6BB]  rounded-xl hover:bg-[#84181fb1] transition "
          onClick={() => {
            clearCart()
          }}
        >
          Vaciar carro
        </button>
      </div>
    </div>
  )
}

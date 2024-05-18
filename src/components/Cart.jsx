import { useState, useEffect } from 'react'
import {
  addToCart,
  removeFromCart,
  clearCart,
  getCartItems,
  getCartTotal
} from '../context/carrito'
import { CartButton } from './CartButton'

export const Cart = () => {
  const [cartItems, setCartItems] = useState(getCartItems())

  useEffect(() => {
    setCartItems(getCartItems())
  }, [])

  return (
    <div className="flex flex-col gap-6 mt-5 font-Roboto">
      <h2 className="mx-auto text-3xl font-Anton2 font-bold leading-none">
        Carrito
      </h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            <h3>{item.name}</h3>
            <p>{item.price} €</p>
          </li>
        ))}
      </ul>
      <div className='flex flex-col gap-2 text-xs'>
        <h2>Total: {getCartTotal()} €</h2>
        <button
          className="mx-auto px-2 py-1 bg-[#450408] text-[#FFE6BB]  rounded-xl hover:bg-[#84181fb1] transition "
          onClick={() => {
            clearCart()
            setCartItems([])
          }}
        >
          Vaciar carro
        </button>
      </div>
    </div>
  )
}

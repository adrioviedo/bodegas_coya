import { useState, useEffect } from 'react'
import { addToCart, removeFromCart, getCartItems } from '../context/carrito'
import { AddToCart } from '../icons/AddToCart'
import { RemoveFromCart } from '../icons/RemoveFromCart'

export const CartButton = ({ item }) => {
  const [quantity, setQuantity] = useState(0)

  useEffect(() => {
    const cartItems = getCartItems()
    const cartItem = cartItems.find((cartItem) => cartItem.id === item.id)
    setQuantity(cartItem ? cartItem.quantity : 0)
  }, [])

  const handleAddToCart = () => {
    addToCart(item)
    setQuantity((prevQuantity) => prevQuantity + 1)
  }

  const handleRemoveFromCart = () => {
    removeFromCart(item.id)
    setQuantity((prevQuantity) => (prevQuantity > 0 ? prevQuantity - 1 : 0))
  }

  return (
    <div className="flex gap-1 items-center text-[#E5CDA6]">
      <button
        className="p-0.5 bg-[#4504089e] rounded-md hover:bg-[#450408] transition"
        onClick={handleAddToCart}
      >
        <AddToCart />
      </button>
      <span className='text-[#450408]'>{quantity}</span>
      <button
        className="p-0.5 bg-[#4504089e] rounded-md hover:bg-[#450408] transition"
        onClick={handleRemoveFromCart}
      >
        <RemoveFromCart />
      </button>
    </div>
  )
}

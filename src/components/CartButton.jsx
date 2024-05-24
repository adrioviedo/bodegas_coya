import { useCart } from '../context/cartContext'
import { AddToCart } from '../icons/AddToCart'
import { RemoveFromCart } from '../icons/RemoveFromCart'

export const CartButton = ({ item, clase }) => {
  const { addToCart, removeFromCart, cartItems } = useCart()

  const handleAddToCart = () => {
    addToCart(item)
  }

  const handleRemoveFromCart = () => {
    removeFromCart(item)
  }

  return (
    <div className="flex gap-1 items-center text-[#E5CDA6]">
      <button
        className="p-0.5 bg-[#4504089e] rounded-md hover:bg-[#450408] transition"
        onClick={handleAddToCart}
      >
        <AddToCart clase={clase} />
      </button>
      <span className="text-[#450408]">
        {cartItems.find((cartItem) => cartItem.id === item.id)?.quantity || 0}
      </span>
      <button
        className="p-0.5 bg-[#4504089e] rounded-md hover:bg-[#450408] transition"
        onClick={handleRemoveFromCart}
      >
        <RemoveFromCart clase={clase}/>
      </button>
    </div>
  )
}

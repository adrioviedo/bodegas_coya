import { createContext, useContext, useState, useEffect } from 'react'

const CartContext = createContext()

export const useCart = () => {
  return useContext(CartContext)
}

const getInitialCart = () => {
  if (typeof window !== 'undefined') {
    return JSON.parse(window.localStorage.getItem('cartItems')) || []
  }
  return []
}

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(getInitialCart())

  const addToCart = (item) => {
    setCartItems((prevCartItems) => {
      const existingCartItem = prevCartItems.find((cartItem) => cartItem.id === item.id)
      if (existingCartItem) {
        return prevCartItems.map((cartItem) =>
          cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
        )
      } else {
        return [...prevCartItems, { ...item, quantity: 1 }]
      }
    })
  }

  const removeFromCart = (item) => {
    setCartItems((prevCartItems) => {
      const existingCartItem = prevCartItems.find((cartItem) => cartItem.id === item.id)
      if (existingCartItem) {
        if (existingCartItem.quantity > 1) {
          return prevCartItems.map((cartItem) =>
            cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem
          )
        } else {
          return prevCartItems.filter((cartItem) => cartItem.id !== item.id)
        }
      } else {
        return prevCartItems
      }
    })
  }

  const clearCart = () => {
    setCartItems([])
    if (typeof window !== 'undefined') {
      window.localStorage.setItem('cartItems', JSON.stringify([]))
    }
  }

  const getCartTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.localStorage.setItem('cartItems', JSON.stringify(cartItems))
    }
  }, [cartItems])

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        clearCart,
        getCartTotal
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

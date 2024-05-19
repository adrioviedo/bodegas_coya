import { createContext, useContext, useState, useEffect } from 'react'

const CartContext = createContext()

export const useCart = () => {
  return useContext(CartContext)
}

export const CartProvider = ({ children }) => {
  const isBrowser = typeof window !== 'undefined'

  const [cartItems, setCartItems] = useState(
    isBrowser ? JSON.parse(window.localStorage.getItem('cartItems')) || [] : []
  )

  const addToCart = (item) => {
    setCartItems((prevCartItems) => {
      // check if item is already in cart
      const existingCartItem = prevCartItems.find((cartItem) => cartItem.id === item.id)

      if (existingCartItem) {
        // if item is already in cart, increase its quantity
        return prevCartItems.map((cartItem) =>
          cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
        )
      } else {
        // if item is not in cart, add it
        return [...prevCartItems, { ...item, quantity: 1 }]
      }
    })
  }

  const removeFromCart = (item) => {
    setCartItems((prevCartItems) => {
      // check if item is in cart
      const existingCartItem = prevCartItems.find((cartItem) => cartItem.id === item.id)

      if (existingCartItem) {
        // if item is in cart and its quantity is more than 1, decrease its quantity
        if (existingCartItem.quantity > 1) {
          return prevCartItems.map((cartItem) =>
            cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem
          )
        } else {
          // if item is in cart and its quantity is 1, remove it
          return prevCartItems.filter((cartItem) => cartItem.id !== item.id)
        }
      } else {
        // if item is not in cart, return the previous cart items
        return prevCartItems
      }
    })
  }

  const clearCart = () => {
    setCartItems([])
    if (isBrowser) {
      window.localStorage.setItem('cartItems', JSON.stringify([]))
    }
  }
  const getCartTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)
  }
  useEffect(() => {
    if (isBrowser) {
      window.localStorage.setItem('cartItems', JSON.stringify(cartItems))
    }
  }, [cartItems, isBrowser])

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

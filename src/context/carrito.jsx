export const addToCart = (item) => {
  const cart = window.localStorage.getItem('cart') ? JSON.parse(window.localStorage.getItem('cart')) : []
  const foundItem = cart.find(cartItem => cartItem.id === item.id)

  if (foundItem) {
    foundItem.quantity += 1
  } else {
    item.quantity = 1
    cart.push(item)
  }

  window.localStorage.setItem('cart', JSON.stringify(cart))
}

export const removeFromCart = (itemId) => {
  let cart = window.localStorage.getItem('cart') ? JSON.parse(window.localStorage.getItem('cart')) : []
  const foundItem = cart.find(cartItem => cartItem.id === itemId)

  if (foundItem) {
    foundItem.quantity -= 1
    if (foundItem.quantity <= 0) {
      cart = cart.filter(cartItem => cartItem.id !== itemId)
    }
  }

  window.localStorage.setItem('cart', JSON.stringify(cart))
}

export const clearCart = () => {
  window.localStorage.removeItem('cart')
}

export const getCartItems = () => {
  return window.localStorage.getItem('cart') ? JSON.parse(window.localStorage.getItem('cart')) : []
}

export const getCartTotal = () => {
  const cart = window.localStorage.getItem('cart') ? JSON.parse(window.localStorage.getItem('cart')) : []
  return cart.reduce((total, item) => total + item.price * item.quantity, 0)
}

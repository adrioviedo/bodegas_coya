import { useState } from 'react'
import { OrderDone } from './OrderDone'
import { Order } from './Order'
import { CartProvider } from '../context/cartContext.jsx'
import { OrderSession } from './OrderSession'

export const FinishOrder = ({ user }) => {
  const [orderDone, setOrderDone] = useState(false)

  const handleOrderDone = () => {
    setOrderDone(true)
  }

  return (
    <>
      {!orderDone
        ? (
            user
              ? (
          <CartProvider>
            <Order handleOrderDone={handleOrderDone} />
          </CartProvider>
                )
              : (
          <OrderSession />
                )
          )
        : (
        <OrderDone />
          )}
    </>
  )
}

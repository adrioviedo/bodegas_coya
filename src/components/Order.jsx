import { useCart } from '../context/cartContext'
import { Table } from './Table'

export const Order = ({ handleOrderDone }) => {
  const { cartItems, clearCart, getCartTotal } = useCart()
  const total = getCartTotal()

  const handleOrder = async () => {
    const cart = cartItems.map((item) => ({
      id: item.id,
      name: item.name,
      quantity: item.quantity,
      price: item.price
    }))

    const order = {
      total,
      cart
    }

    try {
      const response = await fetch('/api/order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(order)
      })

      if (!response.ok) {
        const errorText = await response.text()
        throw new Error(`Error al procesar el pedido: ${errorText}`)
      }

      clearCart()
      handleOrderDone()
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className="flex items-center justify-center h-screen">
      {!cartItems.length
        ? (
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-700">Tu pedido está vacío</h1>
          <a href="/productos" className="text-blue-500">Volver a la tienda</a>
        </div>
          )
        : (
        <div className="text-center flex flex-col gap-6 items-center">
          <h1 className="text-3xl font-bold text-gray-700">Tu pedido</h1>
          <Table products={cartItems} total={total} />
          <button onClick={handleOrder} className="px-4 py-2 mt-4 text-white bg-blue-500 rounded-lg">
            Realizar pedido
          </button>
        </div>
          )}
    </div>
  )
}

import { useCart } from '../context/cartContext'
import { Table } from './Table'

export const Order = ({ handleOrderDone }) => {
  const { cartItems, clearCart, getCartTotal } = useCart()
  const total = getCartTotal()

  const handleOrder = () => {
    const cart = cartItems.map((item) => ({
      id: item.id,
      quantity: item.quantity
    }))

    const order = {
      total: getCartTotal,
      cart
    }

    fetch('/api/order', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ order })
    })
      .then((res) => {
        if (res.ok) {
          clearCart()
          handleOrderDone()
        }
      })
      .catch((error) => {
        console.error('Error:', error)
      })
  }

  return (
    <div className="flex items-center justify-center h-screen">
      {!cartItems.length
        ? (
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-700">
            Tu pedido esta vacío
          </h1>
          <a href="/productos" className="text-blue-500">
            Volver a la tienda
          </a>
        </div>
          )
        : (
        <div className="text-center flex flex-col gap-6 items-center">
          <h1 className="text-3xl font-bold text-gray-700">Tu pedido</h1>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left rtl:text-right text-[#E5CDA6] font-Roboto">
              <thead className="text-md text-[#E5CDA6] uppercase bg-[#450408] font-Anton2 font-semibold   ">
                <tr>
                  <th scope="col" className="px-6 py-3 rounded-tl-lg">
                    Nombre
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Qty
                  </th>
                  <th scope="col" className="px-6 py-3 rounded-tr-lg">
                    Precio
                  </th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => (
                  <tr className="bg-[#4504089e]  " key={item.id}>
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                    >
                      {item.name}
                    </th>
                    <td className="px-6 py-4">{item.quantity}</td>
                    <td className="px-6 py-4">{item.price} €</td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr className="font-semibold text-gray-900 ">
                  <th scope="row" className="px-6 py-3 text-base">
                    Total
                  </th>
                  <td className="px-6 py-3"></td>
                  <td className="px-6 py-3">{total} €</td>
                </tr>
              </tfoot>
            </table>
          </div>
          <button
            onClick={handleOrder}
            className="px-4 py-2 mt-4 text-white bg-blue-500 rounded-lg"
          >
            Realizar pedido
          </button>
        </div>
          )}
    </div>
  )
}

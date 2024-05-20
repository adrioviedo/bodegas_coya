import { useState } from 'react'
import { Modal } from './Modal' // Importa tu componente Modal

export const OrderTable = ({ orders }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [currentOrder, setCurrentOrder] = useState(null)

  const handleOpenModal = (order) => {
    setCurrentOrder(order)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setCurrentOrder(null)
    setIsModalOpen(false)
  }

  return (
    <div className="overflow-x-auto font-Roboto">
      <table className="min-w-[50%] divide-y divide-[#450408] text-center">
        <thead className="bg-[#450408] text-[#FFE6BB]">
          <tr>
            <th
              scope="col"
              className="px-6 py-3 text-xs font-medium tracking-wider uppercase rounded-tl-lg"
            >
              ID
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-xs font-medium tracking-wider uppercase"
            >
              Fecha
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-xs font-medium tracking-wider uppercase"
            >
              Total
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-xs font-medium tracking-wider uppercase rounded-tr-lg"
            >
              Detalles del pedido
            </th>
          </tr>
        </thead>
        <tbody className="bg-[#FFE6BB] divide-y divide-[#450408] ">
          {orders.map((order) => (
            <tr key={order.id}>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-[#450408]">
                {order.id}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-[#450408]">
                {new Date(order.date).toLocaleDateString()} {/* Asegúrate de que "order.date" es un string o Date válido */}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-[#450408]">
                {order.total} €
              </td>
              <td className="px-6 py-4 whitespace-nowrap ">
                <button
                  className="text-sm text-[#84181f] hover:underline"
                  onClick={() => handleOpenModal(order)}
                >
                  Ver detalles
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {isModalOpen && <Modal order={currentOrder} onClose={handleCloseModal} />}
    </div>
  )
}

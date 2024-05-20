export const Modal = ({ order, onClose }) => {
  if (!order) return null

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg overflow-hidden w-11/13 md:w-2/3 lg:w-1/4">
        <div className="flex justify-between items-center p-4 bg-[#450408] text-[#FFE6BB]">
          <h2 className="text-xl font-bold">Detalles del Pedido</h2>
          <button onClick={onClose} className="text-lg font-bold">&times;</button>
        </div>
        <div className="p-4 bg-[#FFE6BB] text-[#450408] text-center ">
          <h3 className="font-bold mb-2">Productos:</h3>
          <ul>
            {order.items.map((item, index) => (
              <li key={index} className="mb-1">
                {item.name} - {item.quantity} x {item.price} €
              </li>
            ))}
          </ul>
          <div className="mt-4">
            <button
              onClick={onClose}
              className="px-4 py-2 bg-[#84181f] text-[#FFE6BB] rounded-lg hover:bg-[#a22b32] transition"
            >
              Cerrar
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

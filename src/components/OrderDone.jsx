export const OrderDone = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-700">
          ¡Gracias por tu compra!
        </h1>
        <p className="text-gray-500">Tu pedido ha sido procesado con éxito.</p>
        <a href="/" className="text-blue-500">
          Volver a la página principal
        </a>
      </div>
    </div>
  )
}

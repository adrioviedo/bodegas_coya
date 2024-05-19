export const Table = ({ products, total }) => {
  <div className="overflow-x-auto">
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
      <thead className="text-xs text-gray-700 uppercase bg-gray-100  ">
        <tr>
          <th scope="col" className="px-6 py-3 rounded-s-lg">
            Nombre
          </th>
          <th scope="col" className="px-6 py-3">
            Qty
          </th>
          <th scope="col" className="px-6 py-3 rounded-e-lg">
            Precio
          </th>
        </tr>
      </thead>
      <tbody>
        {products.map((item) => (
          <tr className="bg-white " key={item.id}>
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
            >
              {item.name}
            </th>
            <td className="px-6 py-4">{item.quantity}</td>
            <td className="px-6 py-4">{item.price}</td>
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr className="font-semibold text-gray-900 ">
          <th scope="row" className="px-6 py-3 text-base">
            Total
          </th>
          <td className="px-6 py-3"></td>
          <td className="px-6 py-3">{total}</td>
        </tr>
      </tfoot>
    </table>
  </div>
}

export const Table = ({ products, total }) => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm text-left rtl:text-right text-[#E5CDA6] font-Roboto">
        <thead className="text-md text-[#E5CDA6] uppercase bg-[#450408] font-Anton2 font-semibold">
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
          {products.map((item) => (
            <tr className="bg-[#4504089e]" key={item.id}>
              <th
                scope="row"
                className="px-6 py-4 font-medium text-[#E5CDA6] whitespace-nowrap"
              >
                {item.name}
              </th>
              <td className="px-6 py-4">{item.quantity}</td>
              <td className="px-6 py-4">{item.price} €</td>
            </tr>
          ))}
        </tbody>
        <tfoot className="bg-[#450408ce] text-[#FFE6BB] font-semibold">
          <tr>
            <th scope="row" className="px-6 py-3 text-base rounded-bl-lg">
              Total
            </th>
            <td className="px-6 py-3"></td>
            <td className="px-6 py-3 rounded-br-lg">{total} €</td>
          </tr>
        </tfoot>
      </table>
    </div>
  )
}

export const Products = ({ products }) => {
  return (
    <div className="flex flex-wrap gap-8 w-full font-Roboto font-medium text-sm justify-center">
      {products.map((product) => (
        <article className="relative min-w-52 aspect-[4/5] bg-[#E5CDA6] rounded-xl cursor-pointer hover:scale-110 transition">
          <img src={product.img} alt={product.name} className="absolute max-w-52 overflow-hidden" />
          <span className="absolute rounded-xl w-full bottom-0 text-pretty px-3 py-3 backdrop-blur-md">
            {product.name}
          </span>
        </article>
      ))}
    </div>
  )
}

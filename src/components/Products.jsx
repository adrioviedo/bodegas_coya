export const Products = ({ products }) => {
  return (
        <div className="productos flex flex-wrap gap-5 h-full font-Roboto font-medium text-sm justify-center">
        {products.map((product) => (
            <article className="relative bg-[#E5CDA6] rounded-xl overflow-hidden cursor-pointer hover:scale-110 transition">
            <img src={product.img} alt="" className="absolute h-[100%] mt-3" />
            <span className="absolute bottom-0 text-pretty px-3 py-2 backdrop-blur-md">
                {product.name}
            </span>
            </article>
        ))}
        </div>
  )
}

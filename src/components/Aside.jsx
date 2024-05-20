import { useImg } from '../hooks/useImg'

export const Aside = ({ categories, handleCategoryChange }) => {
  return (
    <aside className="lg:w-[25%] w-full flex lg:flex-col gap-5 overflow-x-scroll lg:overflow-hidden pb-4 lg:pb-0">
      {categories.map((categoria) => (
        <article
          className="relative  h-16 lg:h-24 min-w-20 bg-[#E5CDA6] rounded-xl overflow-hidden hover:bg-[#450408] hover:text-[#FFE6BB] cursor-pointer transition"
          key={categoria.id}
          onClick={() => handleCategoryChange(categoria)}
        >
          <h2 className="font-Anton text-sm lg:text-2xl absolute left-5 top-5 z-20">
            {categoria.category}
          </h2>
          <img
            src={useImg(categoria.img)}
            alt=""
            className="absolute object-fit object-center -right-6 -bottom-10 max-h-36"
          />
        </article>
      ))}
    </aside>
  )
}

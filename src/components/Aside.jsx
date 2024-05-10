export const Aside = ({ categories, handleCategoryChange }) => {
  return (
    <aside class="w-[25%] flex flex-col gap-5">
      {categories.map((categoria) => (
        <article
          class="asArticle relative w-full min-h-24 min-w-44 bg-[#E5CDA6] rounded-xl overflow-hidden hover:bg-[#450408] hover:text-[#FFE6BB] cursor-pointer transition"
          key={categoria.id}
          onClick={() => handleCategoryChange(categoria)}
        >
          <h2 class="font-Anton text-2xl absolute left-5 top-5 z-20">
            {categoria.category}
          </h2>
          <img
            src={categoria.img}
            alt=""
            class="absolute object-fit object-center -right-6 -bottom-6 h-full"
          />
        </article>
      ))}
    </aside>
  )
}

import { Search } from './Search.jsx'

export const ProductsTitle = ({
  category,
  denominations,
  handleDenominationChange,
  search
}) => {
  return (
    <>
      {search
        ? (
        <>
          <h1 className="categoryTitle font-Anton text-4xl lg:text-6xl">
            Buscador
          </h1>
        </>
          )
        : (
        <>
          <h1 className="categoryTitle font-Anton text-4xl lg:text-6xl">
            {category.category}
          </h1>
          {denominations
            ? (
            <ul className="flex gap-3 overflow-y-scroll lg:overflow-hidden">
              {denominations.map((denomination) => (
                <li
                  key={denomination.id}
                  className=" min-w-20 px-2 py-1 rounded-xl hover:bg-[#450408] hover:text-[#FFE6BB] cursor-pointer transition text-sm lg:text-xl font-Anton2"
                  onClick={() => handleDenominationChange(denomination.id)}
                >
                  {denomination.denomination}
                </li>
              ))}
            </ul>
              )
            : null}
        </>
          )}
    </>
  )
}

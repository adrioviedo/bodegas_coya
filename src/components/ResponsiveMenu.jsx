import { Search } from './Search.jsx'

export const ResponsiveMenu = () => {
  return (

      <div class="flex flex-col gap-6">
        <Search
          formClass="flex items-center gap-3 self-center md:hidden"
          inputClass="bg-[#f9ecd4ca] px-2 py-1 rounded-md w-[150px]"
        />

        <div>
          <ul class="font-Roboto">
            <li class="mb-1">
              <a
                class="block p-4 text-sm font-semibold text-[#48070b] hover:bg-[#f3e0c0] hover:text-[#ab4a4f] rounded"
                href="/productos"
              >
                Productos
              </a>
            </li>
            <li class="mb-1">
              <a
                class="block p-4 text-sm font-semibold text-[#48070b] hover:bg-[#f3e0c0] hover:text-[#ab4a4f] rounded"
                href="/nosotros"
              >
                Coya e Hijos
              </a>
            </li>
            <li class="mb-1">
              <a
                class="block p-4 text-sm font-semibold text-[#48070b] hover:bg-[#f3e0c0] hover:text-[#ab4a4f] rounded"
                href="/contacto"
              >
                Contacto
              </a>
            </li>
          </ul>
        </div>
      </div>

  )
}

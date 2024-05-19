import { useState } from 'react'
import { CartIcon } from '../icons/cartIcon.jsx'
import { Magnifier } from '../icons/Magnifier.jsx'
import { UserIcon } from '../icons/User.jsx'
import { ResponsiveMenu } from './ResponsiveMenu.jsx'
import { Search } from './Search.jsx'
import { UserHeader } from './UserHeader.jsx'
import { Cart } from './Cart.jsx'
import { CloseButton } from './CloseButton.jsx'
import { CartProvider } from '../context/cartContext.jsx'

export const Header = () => {
  const [showMenu, setShowMenu] = useState(false)
  const [showCart, setShowCart] = useState(false)

  const toggleMenu = () => {
    setShowMenu(!showMenu)
  }

  const toggleCart = () => {
    setShowMenu(!showMenu)
    setShowCart(!showCart)
  }

  return (
    <header class="py-3 px-5 bg-[#48070b] rounded-b-lg sticky -top-0.5 z-50">
      <nav class="relative flex items-center justify-between w-4/5 mx-auto my-0 text-[#FFE6BB]">
        <a href="/" class="hover:scale-125 transition">
          <img src="./img/LOGO-COYA.png" alt="logo coya" class="w-8 md:w-10" />
        </a>
        <Search
          formClass="hidden md:flex items-center gap-3 absolute left-[20%]"
          inputClass="bg-[#ffe6bb4b] px-2 py-1 rounded-md w-[50px] md:w-[100px] lg:w-[150px]"
        />
        <ul class="hidden absolute top-1/2 right-0 transform -translate-y-1/2 -translate-x-1/2 lg:mx-auto lg:flex lg:items-center lg:w-auto lg:space-x-6">
          <li>
            <a
              class="inline-block hover:scale-110 transition"
              href="/productos"
            >
              Productos
            </a>
          </li>

          <li>
            <a class="inline-block hover:scale-110 transition" href="/nosotros">
              Coya e Hijos
            </a>
          </li>
          <li>
            <a class="inline-block hover:scale-110 transition" href="/contacto">
              Contacto
            </a>
          </li>
        </ul>
        <div class="flex items-center gap-6">
          <a href="/signin" class="hover:scale-125 transition hidden lg:block">
            <UserIcon clase="w-6 h-6" />
          </a>
          <button
            class="navbar-burger hover:scale-125 transition block"
            onClick={toggleCart}
          >
            <CartIcon clase="w-4 h-4 md:w-6 md:h-6" />
          </button>
          <div class="lg:hidden flex items-center gap-6">
            <button
              class="navbar-burger block hover:scale-125 transition md:hidden"
              onClick={toggleMenu}
            >
              <Magnifier clase="h-4 w-4" />
            </button>
            <button
              class="navbar-burger flex flex-row items-center text-[#FFE6BB]"
              onClick={toggleMenu}
            >
              <svg
                class="block h-4 w-4 fill-current hover:scale-125 transition"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Mobile menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
              </svg>
            </button>
          </div>
        </div>
      </nav>
      {showMenu && (
        <div className="navbar-menu relative z-50">
          <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
          <nav className="fixed top-0 right-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-[#ffe6bbe1] border-r overflow-y-auto">
            <nav className="flex items-center mb-8">
              <a className="mr-auto text-3xl font-bold leading-none" href="/">
                <img
                  src="./img/LOGO-COYA.png"
                  alt="logo coya"
                  className="w-10"
                />
              </a>

              {!showCart
                ? (
                <CloseButton handleClose={toggleMenu} />
                  )
                : (
                <CloseButton handleClose={toggleCart} />
                  )}
            </nav>
            {showCart
              ? (
              <CartProvider>
                <Cart />
              </CartProvider>
                )
              : (
              <ResponsiveMenu />
                )}
            <UserHeader />
          </nav>
        </div>
      )}
    </header>
  )
}

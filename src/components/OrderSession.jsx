import { useState } from 'react'

export const OrderSession = () => {
  const [register, setRegister] = useState(false)

  const handleRegister = () => {
    setRegister(!register)
  }
  return (
    <section className="h-[80vh] flex items-center">
      {!register
        ? (
        <div className="w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-md">
          <div className="px-6 py-4">
            <div className="flex justify-center mx-auto">
              <img
                className="w-auto h-12 sm:h-20"
                src="./img/LOGO-COYA.png"
                alt=""
              />
            </div>

            <h3 className="mt-3 text-xl font-medium text-center text-gray-600">
              Necesitas una cuenta para continuar
            </h3>

            <p className="mt-1 text-center text-gray-500">
              Inicia sesión o crea una cuenta
            </p>

            <form action="/api/auth/signin" method="POST">
              <input type="hidden" name="order" value="true" />
              <div className="w-full mt-4">
                <input
                  className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg focus:border-blue-400 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Correo electrónico"
                  aria-label="Email Address"
                />
              </div>

              <div className="w-full mt-4">
                <input
                  className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg focus:border-blue-400 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Contraseña"
                  aria-label="Password"
                />
              </div>

              <div className="flex items-center justify-between mt-4">
                <a
                  href="#"
                  className="text-sm text-gray-600 hover:text-gray-500"
                >
                  ¿Has olvidado la contraseña?
                </a>

                <button className="px-6 py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-[#48070b] rounded-lg hover:bg-[#48070bbc]">
                  Iniciar sesión
                </button>
              </div>
            </form>
          </div>

          <div className="flex items-center justify-center py-4 text-center bg-gray-50">
            <span className="text-sm text-gray-600">
              {' '}
              ¿No tienes una cuenta?{' '}
            </span>

            <button
              onClick={handleRegister}
              className="mx-2 text-sm font-bold text-[#48070b] hover:underline"
            >
              Registrate
            </button>
          </div>
        </div>
          )
        : (
        <div class="w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-md">
          <div class="px-6 py-4">
            <div class="flex justify-center mx-auto">
              <img
                class="w-auto h-12 sm:h-20"
                src="./img/LOGO-COYA.png"
                alt=""
              />
            </div>

            <h3 class="mt-3 text-xl font-medium text-center text-gray-600">
              Bienvenido a Bodegas Coya
            </h3>

            <p class="mt-1 text-center text-gray-500">
              Crea una cuenta o inicia sesión
            </p>

            <form action="/api/auth/register" method="POST">
              <input type="hidden" name="order" value="true" />
              <div class="w-full mt-4">
                <input
                  class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg focus:border-blue-400 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Correo electrónico"
                  aria-label="Email Address"
                />
              </div>

              <div class="w-full mt-4">
                <input
                  class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg focus:border-blue-400 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Nombre"
                  aria-label="Name"
                />
              </div>

              <div class="w-full mt-4">
                <input
                  class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg focus:border-blue-400 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
                  type="text"
                  name="lastName"
                  id="lastName"
                  placeholder="Apellidos"
                  aria-label="lastName"
                />
              </div>

              <div class="w-full mt-4">
                <input
                  class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg focus:border-blue-400 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
                  type="text"
                  name="phone"
                  id="phone"
                  placeholder="Teléfono"
                  aria-label="Phone"
                />
              </div>

              <div class="w-full mt-4">
                <input
                  class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg focus:border-blue-400 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
                  type="text"
                  name="address"
                  id="address"
                  placeholder="Dirección"
                  aria-label="Address"
                />
              </div>

              <div class="w-full mt-4">
                <input
                  class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg focus:border-blue-400 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Contraseña"
                  aria-label="Password"
                />
              </div>

              <div class="flex items-center justify-center mt-4">
                <button class="px-6 py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-[#48070b] rounded-lg hover:bg-[#48070bbc]">
                  Registrarse
                </button>
              </div>
            </form>
          </div>

          <div class="flex items-center justify-center py-4 text-center bg-gray-50">
            <span class="text-sm text-gray-600"> ¿Ya tienes una cuenta? </span>

            <button
                onClick={handleRegister}
              class="mx-2 text-sm font-bold text-[#48070b] hover:underline"
            >
              Inicia sesión
            </button>
          </div>
        </div>
          )}
    </section>
  )
}

import Cookies from 'js-cookie'

export const UserHeader = () => {
  const accessToken = Cookies.get('sb-access-token')
  const refreshToken = Cookies.get('sb-refresh-token')

  const checkSession = accessToken && refreshToken

  return (
    !checkSession
      ? (
      <div className="mt-auto">
        <a
          className="block px-4 py-3 mb-3 leading-loose text-xs text-center font-semibold bg-gray-50 hover:bg-gray-200 rounded-xl"
          href="/signin"
        >
          Iniciar sesión
        </a>
        <a
          className="block px-4 py-3 mb-2 leading-loose text-xs text-center text-[#FFE6BB] font-semibold bg-[#48070b] hover:bg-[#48070bd5] rounded-xl"
          href="/register"
        >
          Registrarse
        </a>
      </div>
        )
      : (
      <div className="mt-auto">
        <a
          className="block px-4 py-3 mb-3 leading-loose text-xs text-center font-semibold bg-gray-50 hover:bg-gray-200 rounded-xl"
          href="/dashboard"
        >
          Perfil
        </a>
        <form action="/api/auth/signout">
          <button
            type="submit"
            className="block w-full px-4 py-3 mb-2 leading-loose text-xs text-center text-[#FFE6BB] font-semibold bg-[#48070b] hover:bg-[#48070bd5] rounded-xl"
          >
            Cerrar sesión
          </button>
        </form>
      </div>
        )
  )
}

import Link from "next/link"

const Footer = () => {
  return (
    <div className='mt-4 border-t-2 border-t-gray-700 w-11/12 mx-auto py-10 flex flex-row flex-wrap items-center justify-between gap-y-6 gap-x-12'>
        <h3>&copy; 2023 All Mac's</h3>

        <ul className='flex flex-wrap items-center gap-y-2 gap-x-8'>
            <li>
                <Link href={'/catalogo'}>Catalogo</Link>
            </li>
            <li>
                <Link href={'/perfil'}>Perfil</Link>
            </li>
            <li>
                <Link href={'/login'}>Iniciar Sesion</Link>
            </li>
            <li>
                <Link href={'/crear-cuenta'}>Crea tu Cuenta</Link>
            </li>
        </ul>
    </div>
  )
}

export default Footer
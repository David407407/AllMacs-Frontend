import Image from "next/image"
import Link from "next/link"
import { Lato, Oswald } from "next/font/google"
import { ShoppingBagIcon } from '@heroicons/react/24/outline'

const lato = Lato({ weight: ['400', '700'], subsets: ['latin'] })
const oswald = Oswald({ weight: ['400', '700'], subsets: ['latin'] })

const NavBar = () => {
  return (
    <nav className="flex justify-between items-center mx-8 py-2 border-b-2 border-b-gray-700 ">
        <Link href='/' className="flex items-center gap-3">
          <Image className="w-14 h-14" src={'/imgs/manzana.png'} alt="Icono Manzana" height={280} width={280} />
          <h3 className={`${oswald.className} text-2xl font-bold text-light-blue-400`}>All Mac's</h3>
        </Link>
        

        <div className={`flex justify-between gap-4 items-center font-bold ${lato.className}`}>
            <Link href={'/catalogo'}>Catalogo</Link>
            <Link href={'/perfil'}>Perfil</Link>
            <Link href={'/login'}>Iniciar Sesion</Link>
            <Link href={'/crear-cuenta'}>Crea tu Cuenta</Link>

            <Link href={'/carrito'}>
              <ShoppingBagIcon className="w-8 h-8"/>
            </Link>

            
        </div>
    </nav>
  )
}

export default NavBar
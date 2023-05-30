import Link from 'next/link'
import Image from 'next/image'
import { Outfit, Lato } from 'next/font/google'
import ProductosCarrosel from './ProductosCarrosel'

const outfit = Outfit({ subsets: ['latin'] })
const lato = Lato({ weight: ['400', '700'], subsets: ['latin'] })

export async function GetProductos() {
  // TODO: Renderizar 4 productos
  const response = await fetch(`${process.env.BACKEND_URL}/productos/api/v1/primeros-cuatro/`)
  const productos = await response.json()
  return productos
}

export default async function Home() {
  const productos = await GetProductos()

  return (
    <main className="flex min-h-screen flex-col items-center h-full w-full">
      <div className='w-full'>
        <div className="w-full bg-[url('/imgs/ipad.jpg')] min-h-min h-[45rem] bg-cover bg-center blur-[2px] absolute -z-10">   
          <div className='w-full h-full bg-black opacity-60'></div>
        </div>
        <div className='flex justify-center items-center relative h-[45rem] bg-dark flex-col w-2/3 mx-auto gap-3'>
          <h1 className={`${outfit.className} text-light-blue-400 font-bold text-7xl text-center z-10`}>All Mac's</h1>
          <h4 className={`${lato.className} text-blue-gray-100 text-xl w-1/2`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis gravida augue vitae nisi tempus, non mollis nunc dapibus. Morbi vitae feugiat augue. Proin magna metus, facilisis ut tellus sed, venenatis pulvinar magna. Vestibulum accumsan ultrices tincidunt. Curabitur finibus fermentum fringilla. Donec a urna mi.</h4>

          <nav className='font-bold text-white flex justify-between w-1/2'>
            <Link href={'/catalogo'} className='bg-amber-600 py-2 rounded-md px-3 text-sm hover:bg-amber-400 transition-all duration-500'>Busca en Nuestro Catalogo</Link>
            <Link href={'/crear-cuenta'} className='bg-amber-600 py-2 rounded-md px-3 text-sm hover:bg-amber-400 transition-all duration-500'>Registrate y Empieza a Comprar</Link>
          </nav>
        </div>
      </div>

      <div className='w-6/12 h-[55rem] mx-auto my-10 grid justify-center'>
        <h2 className={`${outfit.className} text-light-blue-400 font-bold text-4xl text-center mb-5`}>Nuestros Productos Más Recientes</h2>

        <ProductosCarrosel productos={productos} />

        <Link href={'/catalogo'} className={`text-center font-bold ${lato.className} text-xl  mt-8`}>Explora Nuestro Catalogo</Link>
      </div>

      <div className='border-t-2 border-t-gray-600 mt-10 py-10 w-5/6'>
          <h2 className='text-center text-2xl mt-3 flex justify-center items-center gap-3'>Acerca de Nosotros
            <Image
              src={'/imgs/manzana.png'}
              alt='Logo de la Pagina'
              width={180}
              height={180}
              className='w-8 h-8'
            />
          </h2>
          <p className='text-gray-700 text-center mt-3'>
            Suspendisse interdum mi et posuere ultricies. Duis sed massa lectus. Aenean id eros eros. Etiam tempus aliquet ultrices. Donec gravida magna leo, in consequat mauris cursus vitae. Cras id molestie enim. Interdum et malesuada fames ac ante ipsum primis in faucibus. Mauris et est eu ex tincidunt auctor non at enim. Ut laoreet arcu quis diam ullamcorper, vel convallis nunc iaculis. Nulla facilisi. Vestibulum vel erat vel tellus malesuada pulvinar. Cras sed feugiat enim, at interdum arcu. Phasellus laoreet est et nunc luctus volutpat. Integer luctus sagittis erat ac rhoncus. Curabitur elementum ante id nisl aliquet congue.
          </p>

          <Link href={'/acerca-nosotros'} className='flex justify-center mt-3 uppercase'>Leer Más</Link>
      </div>
      
    </main>
  )
}

import { Outfit } from "next/font/google"
import Productos from "./Productos"

const outfit = Outfit({weight: ['700'], subsets: ['latin']})

export async function GetAllProductos() {
    const response = await fetch(`${process.env.BACKEND_URL}/productos/api/v1/productos/`)
    const productos = await response.json()
    return productos
  }

const Catalogo = async () => {
    const productos = await GetAllProductos()
    
  return (
    <main className="mt-12 mb-12">
        <h1 className={`${outfit.className} text-4xl text-center`}>Explora Nuestro Catalogo</h1>

        <Productos productos={productos} />
    </main>
  )
}

export default Catalogo
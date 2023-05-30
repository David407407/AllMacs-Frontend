'use client'
import Image from "next/image"
import Link from "next/link"
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button 
} from "@material-tailwind/react"
import { StarIcon } from '@heroicons/react/24/solid'

import { Outfit, Lato } from "next/font/google"

const outfit = Outfit({weight: ['700'], subsets: ['latin']})
const lato = Lato({weight: ['700'], subsets: ['latin']})

const Productos = ({ productos }: { productos: any }) => {

  return (
    <div className='w-11/12 xl:w-10/12 mx-auto grid xl:grid-cols-3 md:grid-cols-2 mt-12 gap-8'>
        {
            productos.map((producto: any) => (
                <Card key={producto.id} className="w-96">
                    <CardHeader shadow={false} floated={false} className="h-96">
                        <Image
                            src={producto.imagen}
                            key={producto.id}
                            width={400}
                            height={400}
                            alt={`Imagen ${producto.nombre}`}
                            className="h-full w-full object-cover rounded-lg"
                        />
                    </CardHeader>
                    <CardBody>
                        <div className="flex items-center justify-between mb-2">
                            <div>
                                <Link href={`/productos/${producto.id}`}>
                                    <Typography variant='h4'>{producto.nombre}</Typography>
                                </Link>
                                <div className="6 flex items-center gap-0">
                                    <StarIcon className="h-5 w-5 text-yellow-700" />
                                    <StarIcon className="h-5 w-5 text-yellow-700" />
                                    <StarIcon className="h-5 w-5 text-yellow-700" />
                                    <StarIcon className="h-5 w-5 text-yellow-700" />
                                    <StarIcon className="h-5 w-5 text-yellow-700" />
                                </div>
                            </div>
                            
                            <h2 className={`${outfit.className} text-lg text-yellow-700 font-bold`}>$<span className="text-xl">{producto.precio}</span></h2> 
                        </div>
                        <Typography variant='small' color='gray' className='opacity-70'>
                            {producto.descripcion}
                        </Typography>
                    </CardBody>
                    <CardFooter className="mx-auto">
                        <Button className={`flex items-center bg-amber-600 text-white ${lato.className}`} color="amber">
                            Añadir al Carrito 
                        </Button>
                    </CardFooter>
                </Card>
            ))
        }
    </div>
  )
}

export default Productos
'use client'
import { Carousel, IconButton, Typography } from "@material-tailwind/react"
import Image from "next/image"
import Link from "next/link"
import { Outfit, Lato } from 'next/font/google'
import { StarIcon, ArrowLongLeftIcon, ArrowLongRightIcon } from '@heroicons/react/24/solid'

const outfit = Outfit({ subsets: ['latin'] })

const ProductosCarrosel = ({ productos }: {productos: any}) => {
  return (
    <Carousel
        className="rounded-xl"
        prevArrow={ ({handlePrev}) => (
            <IconButton
                variant="text"
                color="white"
                size="lg"
                onClick={handlePrev}
                className="!absolute top-2/4 -translate-y-2/4 left-4"
            >
                <ArrowLongLeftIcon strokeWidth={2} className="w-6 h-6" />
            </IconButton>
        )}
        nextArrow={ ({handleNext}) => (
            <IconButton
                variant="text"
                color="gray"
                size="lg"
                onClick={handleNext}
                className="!absolute top-2/4 -translate-y-2/4 !right-4"
            >
                <ArrowLongRightIcon strokeWidth={2} className="w-6 h-6 lg:text-white" />
            </IconButton>
        )}
        navigation={({ setActiveIndex, activeIndex, length}) => (
            <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
                { new Array(length).fill('').map((_, i) => (
                    <span
                        key={i}
                        className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${ activeIndex === i ? 'bg-black w-8' : 'bg-black/50 w-4'}`}
                        onClick={() => setActiveIndex(i)}
                    >
                    </span>
                ))}
            </div>
        )}
    >
        {
                productos.map( (producto: any) => (

                    <div key={producto.id}>
                        <div>
                            <Image
                                src={producto.imagen}
                                key={producto.id}
                                width={400}
                                height={400}
                                alt={`Imagen ${producto.nombre}`}
                                className="h-[35rem] w-full object-cover rounded-lg"
                            />
                        </div>
                        <div className=" w-11/12 mx-auto grid gap-3 mt-2">
                            <div className="6 flex items-center gap-0">
                                <Link href={`/producto/${producto.id}`}>
                                    <Typography variant='h4' color='gray' className='mr-2'>{producto.nombre}</Typography>
                                </Link>
                                <StarIcon className="h-5 w-5 text-yellow-700" />
                                <StarIcon className="h-5 w-5 text-yellow-700" />
                                <StarIcon className="h-5 w-5 text-yellow-700" />
                                <StarIcon className="h-5 w-5 text-yellow-700" />
                                <StarIcon className="h-5 w-5 text-yellow-700" />
                            </div>
                            <article className="flex">
                                <p className="text-sm text-gray-700">
                                    {producto.descripcion}
                                </p>
                                <h2 className={`${outfit.className} text-lg text-yellow-700 font-bold`}>$<span className="text-xl">{producto.precio}</span></h2> 
                                
                            </article>
                            
                        </div>
                    </div>
                    
                    
                ))
        } 
        
    </Carousel>
  )
}

export default ProductosCarrosel
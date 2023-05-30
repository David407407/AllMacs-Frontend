'use client'
import Link from "next/link";
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Input,
    Checkbox,
    Button,
} from "@material-tailwind/react";
import { CursorArrowRaysIcon } from '@heroicons/react/24/solid'  
   
  export default function LoginCard() {
    return (
      <Card className="w-1/2 mx-auto py-24">
        <CardHeader
          variant="gradient"
          color="blue"
          className="mb-4 grid h-28 place-items-center"
        >
          <Typography variant="h3" color="white">
            Inicia Sesión
          </Typography>
        </CardHeader>
        <CardBody className="flex flex-col gap-4">
          <Typography className='flex gap-2' variant='small' color='gray'> <CursorArrowRaysIcon className="w-5 h-5"/> Inicia sesion con nosotros y empieza a comprar</Typography>
          <Input label="Email" type="email" name="email" size="lg" />
          <Input label="Contraseña" name="password" type="password" size="lg" />
          <div className="-ml-2.5">
            <Checkbox label="Remember Me" />
          </div>
        </CardBody>
        <CardFooter className="pt-0">
          <Button variant="gradient" fullWidth>
            Iniciar Sesión
          </Button>
          <Typography variant="small" className="mt-6 flex justify-center">
            Aún no tienes una cuenta?
            <Link href={'/crear-cuenta'} className="text-sm text-blue-400 ml-1 font-bold">Crea una</Link>
          </Typography>
        </CardFooter>
      </Card>
    );
  }
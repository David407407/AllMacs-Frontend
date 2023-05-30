'use client'
import { useState } from "react";
import Link from "next/link";
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Input,
    Alert,
} from "@material-tailwind/react";
import { CursorArrowRaysIcon, ExclamationTriangleIcon } from '@heroicons/react/24/solid'  
   
export default function CrearCuentaCard() {
    const [nombre, setNombre] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [repetirPassword, setRepetirPassword] = useState('')
    const [alerta, setAlerta] = useState({
        msg: '',
        error: false
    })

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if([nombre, email, password, repetirPassword].includes('')) {
            setAlerta({msg: 'Los Campos Estan Vacios', error: true})
            return
        }
        if(password.length < 6) {
            setAlerta({msg: 'La Contraseña debe contener al menos 6 caracteres', error: true})
            return
        }
        if(password !== repetirPassword) {
            setAlerta({msg: 'Las Contraseñas no Coinciden', error: true})
            return
        }
        setAlerta({msg: '', error: false})

        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/usuarios/api/v1/usuario/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({nombre, password, email}),
            }).then(respuesta => respuesta.ok ? setAlerta({msg: 'Revisa tu Email para ver las instrucciones', error: false}) : setAlerta({msg: 'Hubo un Error', error: true}))
        } catch (error) {
            
        }

    }

    const { msg } = alerta

    return (
      <Card className="w-1/2 mx-auto py-20">
        <CardHeader
          variant="gradient"
          color="orange"
          className="mb-4 grid h-28 place-items-center"
        >
          <Typography variant="h3" color="white">
            Crea tu Cuenta
          </Typography>
        </CardHeader>
        <CardBody className="flex flex-col gap-4 my-10">
            {
                msg.length > 0 && (<Alert icon={<ExclamationTriangleIcon className="w-6 h-6"/>} color={alerta.error ? 'red' : 'green'}>{msg}</Alert>)
            }
          <Typography className='flex gap-2' variant='small' color='gray'> <CursorArrowRaysIcon className="w-5 h-5"/> Crea tu cuenta y empieza a comprar</Typography>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <Input label="Nombre" type="text" name="nombre" size="lg" value={nombre} onChange={e => setNombre(e.target.value)} />
            <Input label="Email" type="email" name="email" size="lg" value={email} onChange={e => setEmail(e.target.value)} />
            <Input label="Contraseña" name="password" type="password" size="lg" value={password} onChange={e => setPassword(e.target.value)} />
            <Input label="Repite tu contraseña" name="password2" type="password" size="lg" value={repetirPassword} onChange={e => setRepetirPassword(e.target.value)} />

            <input type='submit' value={'Crear Cuenta'}
                className='bg-orange-400 w-full mx-auto text-white font-bold text-xl px-3 py-2 rounded-lg shadow-lg hover:shadow-orange-200 transition-shadow cursor-pointer m-3 '
            />
          </form>
          
        </CardBody>
        <CardFooter className="pt-0">
          <Typography variant="small" className="mt-6 flex justify-center">
            Ya tienes una cuenta?
            <Link href={'/login'} className="text-sm text-orange-500 ml-1 font-bold">Inicia Sesión</Link> 
          </Typography>
        </CardFooter>
      </Card>
    );
}
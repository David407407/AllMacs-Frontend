import React from 'react'

export async function ConfirmarCuentaFetch(id: string) {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/usuarios/api/v1/usuario/`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        }).then(respuesta => console.log(respuesta))
    } catch (error) {
        console.log(error)
    }
}

const ConfirmarCuenta = () => {
  return (
    <div>ConfirmarCuenta</div>
  )
}

export default ConfirmarCuenta
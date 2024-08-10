import React from 'react'
import {useForm} from "react-hook-form"

// npm install react-hook-form instalar esta librería para poder usar estos formularios

const Contacto = () => {

    const { register, handleSubmit } = useForm();

    const enviar = (data) => {
        console.log(data);
    }

  return (

    <div className="container">
        <h1>Contacto</h1>
        <form onSubmit={handleSubmit(enviar)}>

            <input type="text" placeholder="Ingrese su nombre" {...register("nombre")} />
            <input type="email" placeholder="Ingrese su e-mail" {...register("email")} />
            <input type="phone" placeholder="Ingrese su teléfono" {...register("telefono")} />

            <button className="enviar" type="submit">Enviar</button>

        </form>
    </div>

  )
}

export default Contacto

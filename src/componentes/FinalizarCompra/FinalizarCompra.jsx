import React, { useContext, useState } from 'react'
import { CartContext } from '../../context/CartContext';
import { useForm } from 'react-hook-form';
// npm install react-hook-form instalar esta librería para poder usar estos formularios
import { collection, addDoc } from 'firebase/firestore';
import { db } from "../../baseDatos/config";
import Swal from 'sweetalert2';

const FinalizarCompra = () => {

    const [pedidoId, setPedidoId] = useState("")

    const { carrito, totalCarrito, vaciarCarrito } = useContext(CartContext);

    const { register, handleSubmit } = useForm();

    const comprar = (data) => {
        const pedido = {
            cliente: data,
            productos: carrito,
            total: totalCarrito()
        }
        const pedidosRef = collection (db, "pedidos");

        addDoc(pedidosRef, pedido)
            .then((doc) => {
                setPedidoId(doc.id);
                vaciarCarrito();
            })
    }

    if (pedidoId) {
        Swal.fire({
            title: "Compra realizada",
            text: `Muchas gracias por su compra, su número de pedido es: ${pedidoId}`,
            icon: "success"
          }).then(function() {
            window.location = "/productos";
        });
        // <div>
        //     <h1>Muchas gracias por su compra</h1>
        //     <p>Tu número de pedido es: {pedidoId}</p>
        // </div>
    }

  return (

    <div className="container">
        <h1>Finalizar Compra</h1>
        <form onSubmit={handleSubmit(comprar)}>

            <input type="text" placeholder="Ingrese su nombre" {...register("nombre")} />
            <input type="email" placeholder="Ingrese su e-mail" {...register("email")} />
            <input type="phone" placeholder="Ingrese su teléfono" {...register("telefono")} />

            <button className="enviar" type="submit">Comprar</button>

        </form>
    </div>

  )
}

export default FinalizarCompra

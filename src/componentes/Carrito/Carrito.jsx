import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'

const Carrito = () => {

    const { carrito, totalCarrito, vaciarCarrito } = useContext(CartContext);
    const handleVaciar = () => {
        vaciarCarrito();
    }


    return (
        <div>
            <h1>Carrito</h1>
            {
                carrito.map((prod) => (
                    <div key={prod.id}>
                        <h2>{prod.nombre}</h2>
                        <p>Precio $ {prod.precio}</p>
                        <p>Cantidad: {prod.cantidad}</p>
                        <p>Precio Total$ {prod.precio * prod.cantidad}</p>
                    </div>


                ))
            }
            {carrito.length > 0 ?
                <>
                    <h2>Precio total $ {totalCarrito()}</h2>
                    <button onClick={handleVaciar}>Vaciar</button>
                    <Link to="/finalizarcompra">Finalizar Compra</Link>
                </>
                :
                
                <p>Pipo el carrito esta vacío</p>
            }



        </div>
    )
}

export default Carrito

import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import './Carrito.css' ;

const Carrito = () => {

    const { carrito, totalCarrito, vaciarCarrito, eliminarCarrito } = useContext(CartContext);
    const handleVaciar = () => {
        vaciarCarrito();
    }


    return (
        <div>
            <h1>Mi carrito</h1>
            <div className="contenedor-prod">
            {
                
                carrito.map((prod) => (
                    <div key={prod.id} className='prod-carrito'>
                        <h2>{prod.nombre}</h2>
                        <p>Precio $ {prod.precio}</p>
                        <p>Cantidad: {prod.cantidad}</p>
                        <p>Precio Total$ {prod.precio * prod.cantidad}</p>
                        {/* <button id="eliminarCarrito${id}" className='btn-borrar'> X </button> */}
                        <button className='btn-borrar' onClick={() => eliminarCarrito(prod.id)}> X </button>
                    </div>
                ))
            }
             </div>
            {carrito.length > 0 ?
                <div className='final-compra'>
                    <h2>Precio total $ {totalCarrito()}</h2>
                    <button onClick={handleVaciar}>Vaciar carrito</button>
                    <Link to="/finalizarcompra">Finalizar Compra</Link>
                </div>
                :
                
                <p>Pipo el carrito esta vacío</p>

            }



        </div>
    )
}

export default Carrito

import { useContext } from 'react'
import cart from './assets/cart.svg'
import './CarritoWidget.css'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'

const CarritoWidget = () => {

    const { cantidadCarrito } = useContext(CartContext);

    return (
        <span>
            <Link to="/carrito">
                <img src={cart} className='carrito' alt='carrito' />
                <span> {cantidadCarrito()}</span>

            </Link>
        </span>
    )
}

export default CarritoWidget
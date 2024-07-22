import cart from './assets/cart.svg'
import './CarritoWidget.css'

const CarritoWidget = () => {

    let number = 0
    return (
        <span>
            <img src={cart} className='carrito' alt='carrito' />
            <span>{number}</span>
        </span>
    )
}

export default CarritoWidget
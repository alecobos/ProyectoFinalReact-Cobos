import React, { useContext, useState } from 'react'
import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import { CartContext } from '../../context/CartContext';


const ItemDetail = ( {item} ) => {

  const {carrito, agregarAlCarrito} = useContext(CartContext);
  // console.log(carrito)

  const [cantidad, setCantidad] = useState(1);

  const handleIncrement = () => {
      item.stock > cantidad  && setCantidad(cantidad + 1);
  }

  
  const handleDecrement = () => {
       cantidad > 1 && setCantidad(cantidad - 1);
  }

  return (
    <div className='contenedor-item'>
        <img src={item.img} alt={item.nombre} className='img' />
        <h4>{item.nombre}</h4>
        <p>Categoría: {item.tipo}</p>
        <p>{item.descripcion}</p>
        <p>${item.precio}</p>
        <p>Stock: {item.stock}</p>
        <div className='item-contador'>
          <ItemCount 
            cantidad = {cantidad} 
            handleIncrement={handleIncrement} 
            handleDecrement={handleDecrement} 
            handleAgregar={() =>  {agregarAlCarrito(item, cantidad)}}
          />
        </div>

        
    </div>
  )
}

export default ItemDetail

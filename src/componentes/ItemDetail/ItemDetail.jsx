import React, { useContext, useState } from 'react'
import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import { CartContex } from '../../context/CartContex'

const ItemDetail = ( {item} ) => {

  const {carrito, agregarAlCarrito} = useContext(CartContex);
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
        <img src={item.img} alt={item.nombre} />
        <h4>{item.nombre}</h4>
        <p>Categoría: {item.tipo}</p>
        <p>{item.descripcion}</p>
        <p>${item.precio}</p>
        <p>Stock: {item.stock}</p>
        <ItemCount 
          cantidad = {cantidad} 
          handleIncrement={handleIncrement} 
          handleDecrement={handleDecrement} 
          handleAgregar={() =>  {agregarAlCarrito(item, cantidad)}}
        />
        
    </div>
  )
}

export default ItemDetail

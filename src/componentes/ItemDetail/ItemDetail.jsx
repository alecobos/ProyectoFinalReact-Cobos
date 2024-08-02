import React, { useState } from 'react'
import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ( {item} ) => {

  const [cantidad, setCantidad] = useState(1);

  const handleIncrement = () => {
      item.stock > cantidad  && setCantidad(cantidad + 1)
  }

  
  const handleDecrement = () => {
       cantidad > 1 && setCantidad(cantidad - 1)
  }

  const handleAgregar = () => {
    console.log({...item, cantidad})
  }

  return (
    <div className='contenedor-item'>
        <img src={item.img} alt={item.nombre} />
        <h4>{item.nombre}</h4>
        <p>Categoría: {item.tipo}</p>
        <p>{item.descripcion}</p>
        <p>${item.precio}</p>
        <p>Stock: {item.stock}</p>
        <ItemCount cantidad = {cantidad} handleIncrement={handleIncrement} handleDecrement={handleDecrement} handleAgregar={handleAgregar} />
        
    </div>
  )
}

export default ItemDetail

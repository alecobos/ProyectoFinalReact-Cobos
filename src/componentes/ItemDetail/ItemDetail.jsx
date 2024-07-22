import React from 'react'
import './ItemDetail.css'

const ItemDetail = ( {item} ) => {
  return (
    <div className='contenedor-item'>
        <img src={item.img} alt={item.nombre} />
        <h4>{item.nombre}</h4>
        <p>Categoría: {item.tipo}</p>
        <p>{item.descripcion}</p>
        <p>${item.precio}</p>
        <p>Stock: {item.stock}</p>
        <button>Agregar</button>
    </div>
  )
}

export default ItemDetail

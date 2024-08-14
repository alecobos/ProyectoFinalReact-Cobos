import React from 'react'
import './Item.css'
import { Link } from 'react-router-dom'

const Item = ({producto}) => {
  return (
    <div className="card-productos">
        <h4>{producto.nombre}</h4>
        <div className="columna-productos">
          <img src={producto.img} alt={producto.nombre} />
          <p>Categoría: {producto.tipo}</p>
          <p>{producto.descripcion}</p>
          <p>${producto.precio}</p>
          <Link to={`/item/${producto.id}`} className="ver-mas">Comprar</Link>
        </div>
    </div>
  )
}

export default Item

import React, { useState } from 'react'
import "./ItemCount.css"

const ItemCount = ({cantidad, handleIncrement, handleDecrement, handleAgregar}) => {


    
  return (

    <div>
      <div className="item-count">
        <button onClick={handleDecrement}>-</button>
        <p>{cantidad}</p>
        <button onClick={handleIncrement}>+</button>
      </div>
      <button className="agregar-al-carrito" onClick={handleAgregar}>Agregar al carrito</button>
    </div>
  )
}

export default ItemCount

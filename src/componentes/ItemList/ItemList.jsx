import './ItemList.css'
import Item from '../Item/Item'

const ItemList = ( {productos, encabezado} ) => {
  return(
    <div>        
        <h2>{encabezado}</h2>
        {
            productos.length > 0 && 
            productos.map((producto) => {
                return (
                    <div className='contenedor-productos'>
                      <Item key={producto.id} producto={producto} />
                    </div>
                        
                )
            })    
        }                 
    </div>
  ) 
}

export default ItemList

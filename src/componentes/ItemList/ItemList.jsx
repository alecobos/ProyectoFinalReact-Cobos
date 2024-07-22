import './ItemList.css'
import Item from '../Item/Item'

const ItemList = ( {productos, encabezado} ) => {
  return(
    <div>        
        <h2>{encabezado}</h2>
        <div className='contenedor-productos'>
        {
            productos.length > 0 && 
            productos.map((producto) => {
                return (
                    <div>
                      <Item key={producto.id} producto={producto} />
                    </div>
                        
                )
            })    
        }       
        </div>
    </div>
  ) 
}

export default ItemList

import './ItemList.css'
import Item from '../Item/Item'

const ItemList = ( {productos, encabezado} ) => {
  return(
    // <div>        
    //     <h2>{encabezado}</h2>
        
    //     <div className='contenedor-productos'>
    //     {
    //         productos.length > 0 && 
    //         productos.map((producto) => {
    //             return (
    //                 <div>
    //                   <Item producto={producto} key={producto.id} />
    //                 </div>
                        
    //             )
    //         })    
    //     }       
    //     </div>
    // </div>

    <div>
      <h2>{encabezado}</h2>
      <div className="contenedor-productos">
          { productos.map((prod) => <Item producto={prod} key={prod.id} />) }
      </div>
</div>
  ) 
}

export default ItemList

import './ItemList.css'
import Item from '../Item/Item'

const ItemList = ( {productos, encabezado} ) => {
  return(
    <div>
      <h2>{encabezado}</h2>
      <div className="contenedor-productos">
          { productos.map((prod) => <Item producto={prod} key={prod.id} />) }
      </div>
</div>
  ) 
}

export default ItemList

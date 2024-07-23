import { useEffect, useState } from "react";
import cargarItems from "../cargarItems";
import ItemList from "../ItemList/ItemList";
import './ItemListContainer.css'
import { useParams } from "react-router-dom";



const ItemListContainer = () => {
    const [productos, setProductos] = useState([]);
    const tipo = useParams().tipo
    const [encabezado, setEncabezado] = useState("Productos"); 

    useEffect(() => {
        cargarItems()
            .then((response) => {
                if (tipo){
                    setProductos( response.filter((prod) => prod.tipo === tipo) );
                    setEncabezado(tipo);
                } else{
                    setProductos(response);
                    setEncabezado("Productos")
                }
            })
            .catch(err => console.error(err))

    }, [tipo])


    return (
        <div>
            {/* <input id="input" type="text" placeholder='Busqueda' className='form-control w-25' /> */}
            <ItemList productos= {productos} encabezado={encabezado} />
        </div>        
    )
}

export default ItemListContainer
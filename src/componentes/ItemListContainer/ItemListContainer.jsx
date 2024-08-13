import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import './ItemListContainer.css'
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../baseDatos/config";



const ItemListContainer = () => {
    const [productos, setProductos] = useState([]);
    
    const [encabezado, setEncabezado] = useState("Productos");

    const tipo = useParams().tipo;

    useEffect(() => {

        const productosRef = collection(db, "productos");

        const q = tipo ? query(productosRef, where("tipo", "==", tipo)): productosRef;

        getDocs(q)
            .then((resp) => {

                setProductos(
                    resp.docs.map((doc) => {
                        return { ...doc.data(), id: doc.id }
                    })
                )
            })


    }, [tipo])


    return (
        <div className="contenedor-productos">
            <ItemList productos={productos} encabezado={encabezado} />
        </div>
    )
}

export default ItemListContainer
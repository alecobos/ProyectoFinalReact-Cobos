import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import './ItemDetailContainer.css';
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../baseDatos/config";

const ItemDetailContainer = () => {
    const [item, setItem] = useState(null);
    const id = useParams().id;

    useEffect (() => {
        const docRef = doc(db, "productos", id);
        getDoc(docRef)
            .then((resp) => {
                setItem ( { ...resp.data(), id} )
            })

    }, [id])

    return (
        <div className="detalle-item">
            {item && <ItemDetail item={item} />}
        </div>
    )}
export default ItemDetailContainer


// cargarItemPorId(Number(id))
// .then((response) => {
//     setItem(response);
// })
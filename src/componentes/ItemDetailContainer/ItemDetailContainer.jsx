import { useState, useEffect } from "react";
import { cargarItemPorId } from "../cargarItems";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import './ItemDetailContainer.css'

const ItemDetailContainer = () => {
    const [item, setItem] = useState(null);
    const id = useParams().id;

    useEffect (() => {
        cargarItemPorId(Number(id))
        .then((response) => {
            setItem(response);
        })
    }, [id])

    return (
        <div className="detalle-item">
            {item && <ItemDetail item={item} />}
        </div>
    )}
export default ItemDetailContainer
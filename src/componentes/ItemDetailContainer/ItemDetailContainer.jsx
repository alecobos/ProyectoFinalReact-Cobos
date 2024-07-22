import { useState, useEffect } from "react";
import { cargarItemPorId } from "../cargarItems";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";

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
        <div>
            {item && <ItemDetail item={item} />}
        </div>
    )}
export default ItemDetailContainer
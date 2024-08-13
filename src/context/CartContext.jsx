import { createContext, useEffect, useState } from "react"
import Swal from "sweetalert2";


export const CartContext = createContext();

const carritoInicial = JSON.parse(localStorage.getItem("carrito")) || [];


export const CartProvider = ({ children }) => {
    const [carrito, setCarrito] = useState(carritoInicial);
    // const [carrito, setCarrito] = useState([]);

    const agregarAlCarrito = (item, cantidad) => {
        const itemNuevo = { ...item, cantidad };

        const nuevoCarrito = [...carrito];
        const incluidoCarrito = nuevoCarrito.find((producto) => producto.id === itemNuevo.id)

        if (incluidoCarrito) {
            incluidoCarrito.cantidad += cantidad;
            // console.log("el producto ya se encuentra en el carrito")
        } else {
            nuevoCarrito.push(itemNuevo)
            // console.log("el producto se agregó al carrito")
        }
        
        setCarrito(nuevoCarrito)

        Swal.fire({
            title: "Productos agregados",
            text: `Se agrego correctamente al carrito`,
            icon: "success"
          });
        // console.log(nuevoCarrito)
    }

    const eliminarCarrito = (id) => {
        
        const nuevoCarrito = carrito.filter(prod => prod.id !== id);
        setCarrito(nuevoCarrito);
        localStorage.setItem('carrito', JSON.stringify(nuevoCarrito));

        // console.log(id)


    }



    const cantidadCarrito = () => {
        return carrito.reduce((acum, prod) => acum + prod.cantidad, 0);
    }

    const totalCarrito = () => {
        return carrito.reduce((acum, prod) => acum + prod.cantidad * prod.precio, 0);
    }

    const vaciarCarrito = () => {
        setCarrito([]);
    }

    useEffect(() => {
        localStorage.setItem("carrito", JSON.stringify(carrito))
    }, [carrito])

    return (
        <CartContext.Provider value={{ 
            carrito, 
            agregarAlCarrito, 
            cantidadCarrito, 
            totalCarrito, 
            vaciarCarrito,
            eliminarCarrito 
        }}>
            {children}
        </CartContext.Provider>
    )
}
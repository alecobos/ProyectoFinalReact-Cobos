import './App.css';
import NavBar from './componentes/NavBar/NavBar';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NotFound from './componentes/NotFound/NotFound';
import { useState } from 'react';
import { CartContex } from './context/CartContex';


function App() {

  const [carrito, setCarrito] = useState([]);

  const agregarAlCarrito = (item, cantidad) => {
    const itemNuevo = {...item, cantidad};

    const nuevoCarrito = [...carrito];
    const incluidoCarrito = nuevoCarrito.find((producto) => producto.id === itemNuevo.id)

    if (incluidoCarrito) {
      incluidoCarrito.cantidad += cantidad;
      console.log("el producto ya se encuentra en el carrito")
    }else {
      nuevoCarrito.push(itemNuevo)
      console.log("el producto se agregó al carrito")
    }
    setCarrito(nuevoCarrito)

    console.log(carrito)
  }



  return (
    <div>
      <CartContex.Provider value={ {carrito, agregarAlCarrito}}>
        <BrowserRouter>

          <NavBar />

          <Routes>
            <Route path="/" element={<ItemListContainer />}/>
            <Route path="/productos" element={<ItemListContainer />}/>
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route path="/productos/:tipo" element={<ItemListContainer />} />
            <Route path="*" element={<NotFound />} />
          </Routes>

        </BrowserRouter>
      </CartContex.Provider>



    </div>


  );
}


export default App

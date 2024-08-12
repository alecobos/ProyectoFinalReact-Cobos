import './App.css';
import NavBar from './componentes/NavBar/NavBar';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NotFound from './componentes/NotFound/NotFound';
import { CartProvider } from './context/CartContext';
import Contacto from './componentes/Contacto/Contacto';
import Carrito from './componentes/Carrito/Carrito';
import FinalizarCompra from './componentes/FinalizarCompra/FinalizarCompra';



function App() {

  return (
    <div>
      <CartProvider>

        <BrowserRouter>

          <NavBar />

          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/productos" element={<ItemListContainer />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route path="/productos/:tipo" element={<ItemListContainer />} />
            {/* <Route path="/contacto" element={<Contacto />} /> */}
            <Route path="/carrito" element={<Carrito />} />
            <Route path="/finalizarcompra" element={<FinalizarCompra />} />
            <Route path="*" element={<NotFound />} />
          </Routes>

        </BrowserRouter>
      </CartProvider>



    </div>


  );
}


export default App

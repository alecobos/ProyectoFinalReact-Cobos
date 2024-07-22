import './App.css';
import NavBar from './componentes/NavBar/NavBar';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NotFound from './componentes/NotFound/NotFound';


function App() {
  return (

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


  );
}


export default App

import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './views/Home';
import Detalle from './views/Detalle';
import Carrito from './views/Carrito';
import NavBar from './componentes/NavBar';
import AppContext from './context/AppContext';


function App() {
  const [listaProductos, setListaProductos] = useState([]);
  const [totalPedido, setTotalPedido] = useState(0);

  async function getPizza() {
    const res = await fetch(window.location.origin+'/pizzas.json');
    const data = await res.json();
    console.log(data);
    setListaProductos(data);
  }

  useEffect(() => {
    console.log('ab');
    getPizza();
  }, []);

  return (
    <div className="App">
      <AppContext.Provider value={{ listaProductos, setListaProductos, totalPedido, setTotalPedido }}>
        <BrowserRouter>
          <NavBar></NavBar>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/pizza/:id" element={<Detalle />}></Route>
            <Route path="/carrito" element={<Carrito />}></Route>
          </Routes>
        </BrowserRouter>
      </AppContext.Provider>
    </div>
  );
}

export default App;

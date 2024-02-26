import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//Components
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { useState } from "react";
import { CartContext } from "./components/context/CartContext";

function App() {
  const [carrito, setCarrito] = useState([]);

  const agregarAlCarrito = (juego, cantidad) => {
    const juegoAgregado = { ...juego, cantidad };

    const nuevoCarrito = [...carrito];
    const estaEnElCarrito = carrito.find(
      (producto) => producto.id === juegoAgregado.id
    );

    if (estaEnElCarrito) {
      estaEnElCarrito.cantidad += cantidad;
      setCarrito(nuevoCarrito);
    } else {
      setCarrito([...carrito, juegoAgregado]);
    }
  };
  return (
    <div>
      <CartContext.Provider value={{ carrito, agregarAlCarrito }}>
        <BrowserRouter>
          <Header />
          <NavBar />
          <Routes>
            <Route exact path="/" element={<ItemListContainer />} />
            <Route path="/juego/:id" element={<ItemDetailContainer />} />
            <Route path="/:plataforma" element={<ItemListContainer />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </CartContext.Provider>
    </div>
  );
}

export default App;

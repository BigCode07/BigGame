import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//Components
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Carrito from "./components/Carrito";
import { CartProvider } from "./components/context/CartContext";
function App() {
  return (
    <div>
      <CartProvider>
        <BrowserRouter>
          <Header />
          <NavBar />
          <Routes>
            <Route exact path="/" element={<ItemListContainer />} />
            <Route path="/juego/:id" element={<ItemDetailContainer />} />
            <Route path="/:plataforma" element={<ItemListContainer />} />
            <Route path="/carrito" element={<Carrito />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;

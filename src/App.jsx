import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//Components
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";

function App() {
  return (
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
  );
}

export default App;

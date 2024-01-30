import { useEffect, useState } from "react";

import pedirJuegos from "../components/pedirJuego.js";
import ItemList from "./ItemList";
import "./Item.css";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [juegos, setjuegos] = useState([]);
  const [titulo, setTiulo] = useState();
  const plataforma = useParams().plataforma;
  console.log(plataforma);
  useEffect(() => {
    pedirJuegos().then((res) => {
      if (plataforma) {
        setjuegos(res.filter((prod) => prod.plataform === plataforma));
        setTiulo(plataforma);
      } else {
        setjuegos(res);
        setTiulo("Juegos");
      }
    });
  }, [plataforma]);
  return (
    <div className="container">
      <ItemList juegos={juegos} titulo={titulo} />
    </div>
  );
};

export default ItemListContainer;

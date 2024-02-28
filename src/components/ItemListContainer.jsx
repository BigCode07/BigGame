import { useEffect, useState } from "react";

import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase/config";
import ItemList from "./ItemList";
import "./Item.css";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [juegos, setJuegos] = useState([]);
  const [titulo, setTiulo] = useState();
  const plataforma = useParams().plataforma;
  console.log(plataforma);
  useEffect(() => {
    const juegosRef = collection(db, "Catalogo");
    const q = plataforma
      ? query(juegosRef, where("plataform", "==", plataforma))
      : juegosRef;
    getDocs(q).then((resp) => {
      setJuegos(
        resp.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        })
      );
    });
  }, [plataforma]);
  return (
    <div className="container">
      <ItemList juegos={juegos} titulo={titulo} />
    </div>
  );
};

export default ItemListContainer;

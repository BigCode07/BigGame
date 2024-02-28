import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { db } from "../firebase/config";
const ItemDetailContainer = () => {
  const [juego, setJuego] = useState(null);
  const id = useParams().id;

  useEffect(() => {
    const docRef = doc(db, "Catalogo", id);
    getDoc(docRef).then((resp) => {
      setJuego({ ...resp.data(), id: resp.id });
    });
  }, [id]);

  return <div>{juego && <ItemDetail juego={juego} />}</div>;
};

export default ItemDetailContainer;

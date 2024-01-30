import { useEffect, useState } from "react";
import { pedirJuegoPorId } from "./pedirJuego";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const [juego, setJuego] = useState(null);
  const id = useParams().id;

  useEffect(() => {
    pedirJuegoPorId(Number(id)).then((res) => {
      setJuego(res);
    });
  }, [id]);

  return <div>{juego && <ItemDetail juego={juego} />}</div>;
};

export default ItemDetailContainer;

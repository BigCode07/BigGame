import db from "./data/juegos.json";

export const pedirJuegos = () => {
  return new Promise((resolve, reject) => {
    resolve(db);
    console.log(db);
  });
};

export const pedirJuegoPorId = (id) => {
  return new Promise((resolve, reject) => {
    const juego = db.find((i) => i.id === id);

    if (juego) {
      resolve(juego);
    } else {
      reject({
        error: "No se encontro el Juego",
      });
    }
  });
};

export default pedirJuegos;

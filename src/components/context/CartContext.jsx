import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

const carritoInicial = JSON.parse(localStorage.getItem("carrito")) || [];

export const CartProvider = ({ children }) => {
  const [carrito, setCarrito] = useState(carritoInicial);

  const agregarAlCarrito = (juego, cantidad) => {
    const juegoAgregado = { ...juego, cantidad };

    const nuevoCarrito = [...carrito];
    const estaEnElCarrito = carrito.find(
      (producto) => producto.id === juegoAgregado.id
    );

    if (estaEnElCarrito) {
      estaEnElCarrito.cantidad += cantidad;
      setCarrito(nuevoCarrito);
      localStorage.setItem();
    } else {
      setCarrito([...carrito, juegoAgregado]);
    }
  };

  const cantidadEnCarrito = () => {
    return carrito.reduce((acc, prod) => acc + prod.cantidad, 0);
  };

  const precioTotal = () => {
    return carrito.reduce((acc, prod) => acc + prod.price * prod.cantidad, 0);
  };

  const vaciarCarrito = () => {
    setCarrito([]);
  };

  useEffect(() => {
    localStorage.setItem("carrito", JSON.stringify(carrito));
  }, [carrito]);

  return (
    <CartContext.Provider
      value={{
        carrito,
        agregarAlCarrito,
        cantidadEnCarrito,
        precioTotal,
        vaciarCarrito,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

import { useContext } from "react";
import { CartContext } from "./context/CartContext";
import { Typography, Button } from "@mui/material";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
const Carrito = () => {
  const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);

  const handleVaciar = () => {
    vaciarCarrito();
  };
  return (
    <div className="container">
      <h1 className="main-title">Carrito</h1>

      {carrito.map((prod) => (
        <div key={prod.id}>
          <Typography variant="h5">{prod.title}</Typography>
          <Typography variant="subtitle1">
            Precio unitario: ${prod.price}
          </Typography>
          <Typography variant="subtitle1">
            Precio total: ${prod.price * prod.cantidad}
          </Typography>
          <Typography variant="subtitle1">Cantidad: {prod.cantidad}</Typography>
        </div>
      ))}
      {carrito.length > 0 ? (
        <>
          <Typography variant="subtitle1">
            Precio Total:{precioTotal()}
          </Typography>

          <Button color="primary" variant="contained" onClick={handleVaciar}>
            {<DeleteForeverIcon />}
          </Button>
        </>
      ) : (
        <Typography variant="subtitle1"> El carrito esta vacio </Typography>
      )}
    </div>
  );
};

export default Carrito;

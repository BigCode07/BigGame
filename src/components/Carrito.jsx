import { useContext } from "react";
import { CartContext } from "./context/CartContext";
import { Typography, Button, CardMedia, Grid } from "@mui/material";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import ShopIcon from "@mui/icons-material/Shop";
import { Link } from "react-router-dom";

const Carrito = () => {
  const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);

  const handleVaciar = () => {
    vaciarCarrito();
  };
  return (
    <div className="container-carrito">
      <h1 className="main-title">Carrito</h1>

      <Grid className="body-carrito" container>
        {carrito.map((prod) => (
          <div key={prod.id}>
            <CardMedia
              class="carritoImage"
              component="img"
              image={prod.image}
              alt={prod.title}
            />
            <Typography variant="subtitle1">{prod.title}</Typography>
            <Typography variant="subtitle2">
              Precio unitario: ${prod.price}
            </Typography>
            <Typography variant="subtitle2">
              Precio total: ${prod.price * prod.cantidad}
            </Typography>
            <Typography variant="subtitle2">
              Cantidad: {prod.cantidad}
            </Typography>
          </div>
        ))}
      </Grid>
      {carrito.length > 0 ? (
        <>
          <Typography variant="subtitle1">
            Precio Total: ${precioTotal()}
          </Typography>
          <div className="price-carrito">
            <Link to="/checkout">
              <Button color="primary" variant="contained">
                {<ShopIcon />} Comprar
              </Button>
            </Link>
            <Button color="primary" variant="contained" onClick={handleVaciar}>
              {<DeleteForeverIcon />}Cancelar
            </Button>
          </div>
        </>
      ) : (
        <Typography variant="subtitle1"> El carrito esta vacio </Typography>
      )}
    </div>
  );
};

export default Carrito;

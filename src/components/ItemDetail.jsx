import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@mui/material";
import ItemCount from "./ItemCount";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useContext, useState } from "react";
import { CartContext } from "./context/CartContext";

const ItemDetail = ({ juego }) => {
  const { carrito, agregarAlCarrito } = useContext(CartContext);
  console.log(carrito);
  const [cantidad, setCantidad] = useState(1);

  const handleRestar = () => {
    setCantidad((prevCantidad) => (prevCantidad > 1 ? prevCantidad - 1 : 1));
  };

  const handleSumar = () => {
    setCantidad((prevCantidad) =>
      prevCantidad < juego.stock ? prevCantidad + 1 : prevCantidad
    );
  };

  return (
    <div className="container">
      <Card sx={{ display: "flex" }}>
        <CardMedia>
          <img
            src={juego.image}
            alt={juego.title}
            style={{ width: 400, height: 550 }}
          />
        </CardMedia>
        <CardContent
          sx={{
            width: 380,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            alignContent: "center",
            justifyContent: "center",
          }}
        >
          <Typography gutterBottom variant="h4" component="div">
            {juego.title}
          </Typography>
          <Typography gutterBottom variant="subtitle1" component="div">
            Fecha: {juego.launchDate}
          </Typography>
          <Typography variant="subtitle1" component="div">
            {juego.develop}
          </Typography>
          <Typography variant="h6">${juego.price}</Typography>
          <ItemCount
            cantidad={cantidad}
            handleSumar={handleSumar}
            handleRestar={handleRestar}
          />
          <CardActions>
            <Button
              variant="contained"
              size="large"
              endIcon={<ShoppingCartIcon />}
              onClick={() => {
                agregarAlCarrito(juego, cantidad);
              }}
            >
              Comprar
            </Button>
          </CardActions>
        </CardContent>
      </Card>
    </div>
  );
};

export default ItemDetail;

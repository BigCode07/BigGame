import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@mui/material";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const ItemDetail = ({ juego }) => {
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
          <CardActions>
            <Button
              variant="contained"
              size="large"
              endIcon={<ShoppingCartIcon />}
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

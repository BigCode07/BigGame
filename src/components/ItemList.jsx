import { Grid, Typography } from "@mui/material";
import Item from "./Item";
import "./Item.css";

const ItemList = ({ juegos, titulo }) => {
  return (
    <div>
      <Typography
        sx={{
          textTransform: "uppercase",
          textDecoration: "underline",
          padding: 2,
        }}
        className="titulo"
        variant="h3"
        gutterBottom
      >
        {titulo}
      </Typography>
      <Grid
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(5,1fr)",
          gap: 1,
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",
        }}
      >
        {juegos.length > 0 &&
          juegos.map((juego) => {
            return <Item key={juego.id} juego={juego} />;
          })}
      </Grid>
    </div>
  );
};

export default ItemList;

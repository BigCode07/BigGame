import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  CardHeader,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

const Item = ({ juego }) => {
  return (
    <div>
      <Card
        sx={{
          maxWidth: 300,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          alignContent: "center",
          margin: 1,
          borderRadius: "4%",
          backgroundColor: "rgb(251, 254, 255)",
        }}
      >
        <CardHeader
          sx={{ textAlign: "center" }}
          title={juego.title}
          subheader={juego.develop}
        />
        <CardMedia
          sx={{ height: 250, width: 200, borderRadius: "5%" }}
          image={juego.image}
          title={juego.title}
        />
        <CardContent sx={{ textAlign: "center" }}>
          <Typography gutterBottom variant="subtitle1" component="div">
            {juego.launchDate}
          </Typography>

          <Typography variant="subtitle2" color="text.secondary">
            Plataforma: {juego.plataform}
          </Typography>
          <Typography variant="subtitle1" color="text.primary">
            ${juego.price}
          </Typography>
        </CardContent>
        <CardActions sx={{ marginBottom: 1 }}>
          {
            <Link to={`/juego/${juego.id}`}>
              <Button size="large" variant="contained" className="buttonVer">
                Ver mas
              </Button>
            </Link>
          }
        </CardActions>
      </Card>
    </div>
  );
};

export default Item;

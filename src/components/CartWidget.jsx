import { Link } from "react-router-dom";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import { useContext } from "react";
import { CartContext } from "./context/CartContext";

const CartWidget = () => {
  const { cantidadEnCarrito } = useContext(CartContext);
  return (
    <div>
      <Link className="menu-link" to="/carrito">
        <ShoppingBagIcon />
        <span className="numerito">{cantidadEnCarrito()}</span>
      </Link>
    </div>
  );
};

export default CartWidget;

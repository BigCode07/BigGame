import "./Header.css";
import logo from "../../assets/Logo.jpg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="Header">
      <div className="Logo">
        <Link to="/">
          <img src={logo} alt="Big Games" />
        </Link>
      </div>
      <div className="Tittle">
        <h1>Tu Tienda Gamer</h1>
      </div>
    </div>
  );
};

export default Header;

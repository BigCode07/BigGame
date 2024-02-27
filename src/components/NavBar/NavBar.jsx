import "./NavBar.css";
import { Link } from "react-router-dom";
import CartWidget from "../CartWidget";
const NavBar = () => {
  const isActive = (match) => {
    return match ? "active-link" : "";
  };
  return (
    <div className="nav-container">
      <ul className="nav-ul">
        <li>
          <Link to={`/`} className={isActive}>
            Inicio
          </Link>
        </li>
        <li>
          <Link to={`/ps5`} className={isActive}>
            PS5
          </Link>
        </li>
        <li>
          <Link to={`/ps4`} className={isActive}>
            PS4
          </Link>
        </li>
        <li>
          <Link to={`/xbox-one`} className={isActive}>
            Xbox One
          </Link>
        </li>
        <li>
          <Link to={`/xbox-x`} className={isActive}>
            Xbox X
          </Link>
        </li>
        <li>
          <Link to={`/pc`} className={isActive}>
            PC
          </Link>
        </li>
        <li>
          <CartWidget />
        </li>
      </ul>
    </div>
  );
};

export default NavBar;

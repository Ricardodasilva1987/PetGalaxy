import "./Navbar.css";
import CartWidget from "../../common/cartWidget/CartWidget";
import { Link } from "react-router-dom";

const Navbar = () => {
  let userRol = "user";

  return (
    <>
      <div>
        <nav className="navbar">
          <div className="navbar-logo">
            <Link to="/">
              <img
                src="https://res.cloudinary.com/drids8rm1/image/upload/v1687765329/huella_kqih3q.png"
                alt="pet-logo"
              />
            </Link>
          </div>
          <ul className="navbar-menu">
            <li className="navbar-item">
              <Link to="/">Todas</Link>
            </li>
            <li className="navbar-item">
              <Link to="/category/alimento">Alimento</Link>
            </li>
            <li className="navbar-item">
              <Link to="/category/salud">Salud</Link>
            </li>
            <li className="navbar-item">
              <Link to="/category/correa y collares">Correa y Collares</Link>
            </li>
            <li className="navbar-item">
              <Link to="/category/juguete">Juguetes</Link>
            </li>
          </ul>

          {userRol === "admin" && (
            <li className="navbar-item">
              <Link to="/dashboard">ADMIN</Link>
            </li>
          )}

          <div className="navbar-cart">
            <CartWidget />
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;

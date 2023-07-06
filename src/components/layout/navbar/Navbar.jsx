import "./Navbar.css";
import CartWidget from "../../common/cartWidget/cartWidget";
const Navbar = () => {
  return (
    <>
      <div>
        <nav className="navbar">
          <div className="navbar-logo">
            <img
              src="https://res.cloudinary.com/drids8rm1/image/upload/v1687765329/huella_kqih3q.png"
              alt="pet-logo"
            />
          </div>
          <ul className="navbar-menu">
            <li className="navbar-item">
              <a href="#">Todas</a>
            </li>
            <li className="navbar-item">
              <a href="#">Alimento</a>
            </li>
            <li className="navbar-item">
              <a href="#">Salud</a>
            </li>
            <li className="navbar-item">
              <a href="#">Correa y Collares</a>
            </li>
            <li className="navbar-item">
              <a href="#">Juguetes</a>
            </li>
          </ul>
          <div className="navbar-cart">
            <CartWidget />
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;

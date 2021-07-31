import "./Navbar.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = ({ click }) => {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const getCartCount = () => {
    return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
  };

  return (
    <nav className="navbar" >
      <div className="navbar__logo">
        <h2>DigiCart</h2>
      </div>

      <ul className="navbar__links">
            
      <li>
          <Link to="/register" className="navbar__logo">
              Sign up
            </Link>
        </li>
      <li>
          <Link to="/signin" className="navbar__logo" >Login</Link>
        </li>


      <li>
          <Link to="/" className="navbar__logo" >Shop</Link>
        </li>

        <li>
          <Link to="/cart" className="cart__link">
            <i className="fas fa-shopping-cart"></i>
            <span>
              Cart <span className="cartlogo__badge">{getCartCount()}</span>
            </span>
          </Link>
        </li>
      </ul>

      <div className="hamburger__menu" onClick={click}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </nav>
  );
};

export default Navbar;

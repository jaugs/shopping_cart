import {Link} from "react-router-dom";
import shoppingCart from '../images/cart.svg';
import home from '../images/home.svg';

function Header (props) {

  return (
    <div className="header">
      <h2>SuperUltraGolf.com</h2>
      <h4>Super Deals, Ultra Savings, all the time!</h4>
      <Link
        to="/cart"
        className='cartButton'>
        <img src={shoppingCart} className="cartIcon" alt="shopping cart" />
        {(props.subTotal === '0.00') ? (<p>Your Cart</p>) : (<p>${props.subTotal}</p>)}
      </Link>
      <Link
        to="/"
        className='homeButton'>
        <img src={home} className="homeIcon" alt="homepage" />
      </Link>
    </div>
  )
}
export default Header
import {Link} from "react-router-dom";
import shoppingCart from '../images/cart.svg';

function Header (props) {

    function locationfind(){
        //console.log(location.state)
        console.log(props.cartItems)
      }
      
      function locationdelete() {
        props.setcartItems([{
          name: '',
          category: '',
          price: '',
          quantity: '',
          description: '',
          image: ''
        }])
      }

    return (
        <div className="header">
      <button onClick={locationfind}>eeee</button>
      <button onClick={locationdelete}>delete</button>
        <h2>SuperUltraGolf.com</h2>
       <h4>Super Deals, Ultra Savings, all the time!</h4>
      <Link
        to='/cart'
        className='cartButton'>
        <img src={shoppingCart} className="cartIcon" alt="shopping cart" />
        {(props.totalPrice === 0) ? (<p>Your Cart</p>) : (<p>${props.totalPrice}</p>)}
        
      </Link>

      </div>

    )
}
export default Header
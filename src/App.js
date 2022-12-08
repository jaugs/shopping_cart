import './App.css';
import { useState } from 'react';
import { Link, Form, useNavigate } from "react-router-dom";
//import Cart from './components/cart';
//import { getContacts, createContact } from "./contacts";
import products from './products'
import Home from './components/home';
import shoppingCart from './images/cart.svg';


function App() {

  const [totalPrice, setTotalPrice] = useState(0)

  const [cartItems, setcartItems] = useState([{
    name: '',
    category: '',
    price: '',
    quantity: '',
    description: '',
    image: ''
  }])

const navigate = useNavigate()
  
// useEffect(() => {
  
//    let price = cartItems.reduce((total, cartItem) => total += parseInt(cartItem.price), 0)
//    console.log(price)
//     displayPrice(price)
  
//    }, [cartItems])

  //  function displayPrice(price) {
  //   setTotalPrice(price)
  //  }

// function getTotalPrice() {
//   let price = cartItems.reduce((total, cartItem) => total += parseInt(cartItem.price), 0)
//   if (price) {
//    return price
//   }
//   else return '';
// }

function findprops() {
  let price = cartItems.reduce((total, cartItem) => total += parseInt(cartItem.price), 0)
  console.log(price)
}


  return (
    <div className="App">
      <header className="header">
        <h1>Welcome to the Store</h1>
       
      {/* <Link
        to='/cart'
        state={{cartInfo: cartItems}}
        className='cartButton'>
        <img src={shoppingCart} className="cartIcon" alt="shopping cart" />
        <p>${cartItems.reduce((total, cartItem) => total += parseInt(cartItem.price), 0)}</p>
      </Link> */}

      <button onClick={() => 
        navigate('/cart', {state: {cartInfo: cartItems}})} className='cartButton' >
        <img src={shoppingCart} className="cartIcon" alt="shopping cart" />
        
        <p>${totalPrice}</p>
      </button>

        <button onClick={findprops}> sdfsdfsdfsdf</button>
      </header>

      <div id="sidebar">
        <h1>Shossp Sidebar</h1>
        <div>
          <form id="search-form" role="search">
            <input
              id="q"
              aria-label="Search Products"
              placeholder="Search Products"
              type="search"
              name="q"
            />
            <div
              id="search-spinner"
              aria-hidden
              hidden={true}
            />
            <div
              className="sr-only"
              aria-live="polite"
            ></div>
          </form>
          <Form method="post">
            <button type="submit">New</button>
          </Form>
        </div>
        <nav>
            <ul>
                <li >dwdwdwdw
                  <Link to={`Cart`}>
                  Cart
                  </Link>
                </li>
          <li>
            {products.name}
          </li>
            </ul>

            <p>
              <i>No contacts</i>
            </p>
  
        </nav>
      </div>
      <Home 
      totalPrice = {totalPrice}
      setTotalPrice = {setTotalPrice}
      products = {products}
      cartItems= {cartItems}
      setcartItems = {setcartItems}>
    
      </Home>


      {/* <div id="detail">
      <Outlet />
      </div> */}
    <div className='footer'>by JAUGS 2022</div>

    </div>
  );
}

export default App;

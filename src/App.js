import './App.css';
import { useState } from 'react';
import { Outlet, Link, Form, useNavigate } from "react-router-dom";
//import Cart from './components/cart';
//import { getContacts, createContact } from "./contacts";
import products from './products'
import Home from './components/home';
import shoppingCart from './images/cart.svg';
// export async function loader() {
//   const contacts = await getContacts();
//   return { contacts };
// }

// export async function action() {
//   await createContact();
// }

function App() {

  const [cartItems, setcartItems] = useState([{
    name: '',
    category: '',
    price: '',
    quantity: '',
    description: '',
    image: ''
  }])

  const navigate = useNavigate()

 function findProps() {
  console.log(cartItems)
  console.log(typeof(cartItems))
 }

  return (
    <div className="App">
      <header className="header">
        <h1>Welcome to the Store</h1>
       
      
      <Link
        to='/cart'
        state={{cartInfo: cartItems}}
        className='cartButton'>
        <img src={shoppingCart} className="cartIcon" alt="shopping cart" />
        <p>${cartItems.reduce((total, cartItem) => total += parseInt(cartItem.price), 0)}</p>
      </Link>

{/* 
      <button onClick={() => navigate(`/cart?cartItems=${cartItems}`)} className='cartButton' >
        <img src={shoppingCart} className="cartIcon" alt="shopping cart" />
        <p>${cartItems.reduce((total, cartItem) => total += parseInt(cartItem.price), 0)}</p>
      </button> */}

        
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

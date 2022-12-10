import './App.css';
import { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
//import Cart from './components/cart';
import products from './products'
import Home from './components/home';
import shoppingCart from './images/cart.svg';


function App() {

  const [filteredProducts, setFilteredProducts] = useState(products)

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

// function findprops() {
//   let price = cartItems.reduce((total, cartItem) => total += parseInt(cartItem.price), 0)
//   console.log(price)
// }

function handleFilter(e) {
  let newFilter = e.target.innerText
  if (newFilter === 'Reset Filters') {
    setFilteredProducts(products)
    return
  }
  let newProducts = products.filter(item => item.category === newFilter)
  setFilteredProducts(newProducts)
}

  return (
    <div className="App">
      <header className="header">
        <h1>SuperUltraGolf.com</h1>
       <h4>Super Deals, Ultra Savings, all the time!</h4>
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
        {(totalPrice === 0) ? (<p>Your Cart</p>) : (<p>${totalPrice}</p>)}
      </button>

        {/* <button onClick={findprops}> sdfsdfsdfsdf</button> */}
      </header>

      <div id="sidebar">
        <h1>Search and Filter</h1>
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
             <button type="submit">New</button>
          </form>
           
        </div>
        <nav>
          <ul>
            <li >
              <Link to={`Cart`}>
              Cart
              </Link>
            </li>
            <li>
              <button className="linkButton" onClick={handleFilter}>Clubs</button>
            </li>
            <li>
              <button className="linkButton" onClick={handleFilter}>Bags</button>
            </li>
            <li>
              <button className="linkButton" onClick={handleFilter}>Balls</button>
            </li>
            <li>
              <button className="linkButton" onClick={handleFilter}>Accessories</button>
            </li>
            <li>
              <button className="linkButton" onClick={handleFilter}>Reset Filters</button>
            </li>
          </ul>
        </nav>
      </div>
      <Home 
      totalPrice = {totalPrice}
      setTotalPrice = {setTotalPrice}
      cartItems= {cartItems}
      setcartItems = {setcartItems}
      products = {filteredProducts}
      setFilteredProducts = {setFilteredProducts}>
      </Home>


      {/* <div id="detail">
      <Outlet />
      </div> */}
    <div className='footer'>by JAUGS 2022</div>

    </div>
  );
}

export default App;

import './App.css';
import { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
//import Cart from './components/cart';
import products from './products'
import Home from './components/home';
import shoppingCart from './images/cart.svg';

// fix cart ID system

function App() {


  const [search, setSearch] = useState('')

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
  
function handleFilter(e) {
  let newFilter = e.target.innerText
  if (newFilter === 'Reset Filters') {
    setFilteredProducts(products)
    return
  }
  let newProducts = products.filter(item => item.category === newFilter)
  setFilteredProducts(newProducts)
}
function handleChange(e) {
  setSearch(e.target.value)
}

function handleSearch(e) {
  e.preventDefault()
  let searchUpperCase = search.toUpperCase()
  let searchProducts = products.filter(item => item.name.toUpperCase().includes(searchUpperCase) ||
   item.description.toUpperCase().includes(searchUpperCase) ||
   item.category.toUpperCase().includes(searchUpperCase))
  setFilteredProducts(searchProducts)
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
          <form id="search-form" onSubmit={handleSearch}>
            <input
              id="form_input"
              placeholder="Search Products"
              type="search"
              name="lookup"
              onChange={handleChange}
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
             <button className="linkButton" type="submit">Submit</button>
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

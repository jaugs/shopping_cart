import './App.css';
import { useState } from 'react';
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Cart from './components/cart';
import products from './products'
import Home from './components/home';
import Header from './components/header';
import Sidebar from './components/sidebar'


// fix cart ID system

function App() {

 //const location = useLocation()
  const [search, setSearch] = useState('')

  const [filteredProducts, setFilteredProducts] = useState(products)

  //const [totalPrice, setTotalPrice] = useState(0)

//   const [cartItems, setcartItems] = useState(() => {
//     if ((location.state === 0) || (location.state === null))
//       { 
//         console.log(location.state)
//         return [{
//           name: '',
//           category: '',
//           price: '',
//           quantity: '',
//           description: '',
//           image: ''
//         }]
//       } 
//     else { 
      
//       return location.state
// }})
const [cartItems, setcartItems] = useState(products)
const [subtotal, setSubtotal] = useState((cartItems.reduce((total, cartItems) => total += parseInt(cartItems.price * cartItems.quantity), 0)).toFixed(2))

const [totalPrice, setTotalPrice] = useState(() => {
  if ((cartItems[0].name === '') || (cartItems === null))
    { 
      return 0} 
    else {
      return cartItems.reduce((total, cartItem) => total += parseInt(cartItem.price * cartItem.quantity), 0)}})

  //const [cartItems, setcartItems] = useState(products)



  return (
    <Router basename="/">
    <div className="App">
      
    <Header 
      cartItems = {cartItems}
      setcartItems = {setcartItems}
      />
    <Sidebar
      cartItems = {cartItems}
      setcartItems = {setcartItems}
      products = {products}
      filteredProducts = {filteredProducts}
      setFilteredProducts = {setFilteredProducts}
      search = {search}
      setSearch = {setSearch}
    />
      <Routes>
      <Route 
      exact path="/"
      element= {
                <Home 
                  totalPrice = {totalPrice}
                  setTotalPrice = {setTotalPrice}
                  cartItems= {cartItems}
                  setcartItems = {setcartItems}
                  products = {filteredProducts}
                  setFilteredProducts = {setFilteredProducts}>
                </Home>}
      />
      
      <Route 
      exact path="/cart"
      element = {<Cart
                  totalPrice = {totalPrice}
                  setTotalPrice = {setTotalPrice}
                  cartItems= {cartItems}
                  setcartItems = {setcartItems}
                  subtotal = {subtotal}
                  setSubtotal = {setSubtotal}
               />}
      />
      </Routes>
    <div className='footer'>by JAUGS 2022</div>

    </div>
    </Router>
  );
}

export default App;

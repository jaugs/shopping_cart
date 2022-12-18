import { useEffect, useState } from 'react';
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Cart from './components/cart';
import products from './products'
import Home from './components/home';
import Header from './components/header';

function App() {

  const [search, setSearch] = useState('')
  const [filteredProducts, setFilteredProducts] = useState(products)
  const [cartItems, setcartItems] = useState([])
  const [subTotal, setSubtotal] = useState(0)

  useEffect(() =>  {
    setSubtotal(cartItems.reduce((total, cartItems) => total += parseInt(cartItems.price * cartItems.quantity), 0).toFixed(2))
  }, [cartItems])

return (
  <Router basename="/">
  <div className="App">
    <Header 
      cartItems = {cartItems}
      setcartItems = {setcartItems}
      subTotal = {subTotal}
    />
    <Routes>
      <Route 
        exact path="/"
        element= {
          <Home 
            products = {products}
            subTotal = {subTotal}
            cartItems= {cartItems}
            setcartItems = {setcartItems}
            filteredProducts = {filteredProducts}
            setFilteredProducts = {setFilteredProducts}
            search = {search}
            setSearch = {setSearch}
          />}
      />
      <Route 
        exact path="/cart"
        element = {
          <Cart
            cartItems= {cartItems}
            setcartItems = {setcartItems}
            subTotal = {subTotal}
          />}
      />
    </Routes>
    <div className='footer'>by JAUGS 2022</div>
  </div>
  </Router>
  );
}
export default App;

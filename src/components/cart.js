import { useState } from "react";
import {Link} from "react-router-dom";
import home from '../images/home.svg'



export default function Cart(props) {

 // const { //st/ate: { //c/artInfo } = {} } = u/seLocation();
  // const location = useLocation()
  // const [cartItems, setcartItems] = useState(location.state);
   const [amount, setAmount] = useState(0)
   const [shipping, setShipping] = useState('9.95')
 

  function handleRemove(item) {
    item.inCart = false
    let newCartItems = props.cartItems.filter(product => product.inCart === true)
    console.log(newCartItems)
   if (newCartItems.length === 0) {
    let temp = {name: ''}
   newCartItems.push(temp)
 }
 props.setcartItems(newCartItems)
}

function handleQuantityChange(e) {
  e.preventDefault()
  console.log(amount)
  setAmount(e.target.value)
}

function updateQuantity(item) {
  item.quantity = amount
  props.setSubtotal((props.cartItems.reduce((total, cartItems) => total += parseInt(cartItems.price * cartItems.quantity), 0).toFixed(2)))
}

function handleShipping(e) {
  e.preventDefault()
  setShipping(e.target.value)
}

function updateCoupon(e) {
  console.log(props.cartItems)
}

//onKeyDown={(e) => {if (!/[0-9]/.test(e.key)){e.preventDefault()}}}
return (
  <div id="Cart">
    <header className="header">
      <h1>SuperUltraGolf.com</h1>
      <h4>Super Deals, Ultra Savings, all the time!</h4>
 
       <Link
        to='/'
        className='cartButton'>
        <img src={home} className="homeIcon" alt="homepage" />
      </Link> 
 

      {/* <button onClick={() => 
        navigate('/', {state: {cartItems: cartInfo}})} className='homeButton' >
        <img src={home} className="homeIcon" alt="homepage" />
        <p>Home</p>
      </button> */}
    </header>
      
    <div className="itemContainer">
    <h3>Your Cart</h3>
      {(props.cartItems[0].name !== '') ? (props.cartItems.map(item => (
              <div className="cartCard" key ={item.name}>
                <div className="imageContainer"><img src={item.image} className="cartPic" alt={item.name} /></div>
                <div className="cartText"> 
                  <p>{item.name}</p>
                <div className="cartDescription">Details:
                  <p>{item.description}</p></div>
                </div>
                <div className="quantityContainer">
                  <div className="quantityForm">
                  <input className="quantityInput" type= 'number' onChange={handleQuantityChange} defaultValue = {item.quantity}
                         name= "quantity"  ></input>
                  <button className="quantityButton" type="submit" onClick={() => {updateQuantity(item)}}>Update</button>
                </div>
                <button className="removeButton" type="submit" onClick={() => {handleRemove(item)}}>Remove</button> </div>
                <div className="cartPrice">${item.price}</div>
              </div>
              ))) : 
              (<div className="cartCard">
                <div className="emptyText">Your shoping cart is empty</div>
              </div>)}
    </div>

    <div className="summaryContainer">
    <h3>Order Summary</h3>
    <div className="summary">
        <div className="quantityForm" onClick={updateCoupon}>
          <input className="couponInput" type= 'text' placeholder= 'Enter Coupon Code'
                 name= "coupon"></input>
          <button className="couponButton">Apply</button>
        </div>
        <div className="subtotal">Subtotal: 
          <div>${props.subtotal}</div>
        </div>

        <label className="shippingLabel" htmlFor="shippingSelect">Select Shipping:</label>
        <div className="select">
        <select id="shippingSelect" value={shipping} onChange={handleShipping}>
          <option value="9.95">Ground (3-5 Business Days): $9.95 </option>
          <option value="19.95">Priority (2 Business Days): $19.95</option>
          <option value="29.95">Express (Next Day): $29.95</option>
        </select>
        <span className="focus"></span>
        </div>
        <div className="tax">Tax:
          <div> ${(props.subtotal * .06).toFixed(2)}</div>
        </div>
        <div className="orderTotal">Order Total: 
          <div>${(parseInt(props.subtotal * 0.06) + parseInt(props.subtotal) + parseInt(shipping)).toFixed(2)}</div>
        </div>
        <button className="checkout">Secure Checkout</button>
        </div>
      </div>
        
    <div className='footer'>by JAUGS 2022</div>
  </div>
  )
  }
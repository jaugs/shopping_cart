import { useState } from "react";

export default function Cart(props) {

  const [amount, setAmount] = useState(1)
  const [shipping, setShipping] = useState('9.95')
 
  function handleRemove(item) {
    item.inCart = false
    item.quantity = 0
    let newCartItems = props.cartItems.filter(product => product.inCart === true)
    props.setcartItems(newCartItems)
  }

  function handleQuantityChange(e) {
    e.preventDefault()
    setAmount(e.target.value)
  }

  function updateQuantity(item) {
    item.quantity = amount
    let cartArr = props.cartItems.filter(product => product.inCart === true);
    props.setcartItems(cartArr)
  }

  function handleShipping(e) {
    e.preventDefault()
    setShipping(e.target.value)
  }

  function updateCoupon(e) {
    e.preventDefault()
  }

return (
  <div id="Cart">
    <div className="itemContainer">
      <h3>Your Cart</h3>
      {(props.cartItems.length !== 0) ? (props.cartItems.map(item => (
        <div className="cartCard" key ={item.name}>
          <div className="imageContainer"><img src={item.image} className="cartPic" alt={item.name} /></div>
          <div className="cartText"> 
            <p>{item.name}</p>
            <div className="cartDescription">Details:
              <p>{item.description}</p>
            </div>
          </div>
          <div className="quantityContainer">
            <div className="quantityForm">
              <input className="quantityInput" type= 'number' onChange={handleQuantityChange} defaultValue = {item.quantity} name= "quantity"></input>
              <button className="quantityButton" type="submit" onClick={() => {updateQuantity(item)}}>Update</button>
            </div>
            <button className="removeButton" type="submit" onClick={() => {handleRemove(item)}}>Remove</button>
          </div>
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
          <input className="couponInput" type= 'text' placeholder= 'Enter Coupon Code' name= "coupon"></input>
          <button className="couponButton">Apply</button>
        </div>
        <div className="subtotal">Subtotal: 
          <div>${props.subTotal}</div>
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
          <div> ${(parseInt(props.subTotal) * .06).toFixed(2)}</div>
        </div>
        <div className="orderTotal">Order Total: 
          <div>${(parseInt(props.subTotal * 0.06) + parseInt(props.subTotal) + parseInt(shipping)).toFixed(2)}</div>
        </div>
        <button className="checkout">Secure Checkout</button>
      </div>
    </div>
  </div>
  )
  }
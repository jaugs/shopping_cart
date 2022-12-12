import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import home from '../images/home.svg'



export default function Cart(props) {

  const { state: { cartInfo } = {} } = useLocation();
  const [amount, setAmount] = useState(0)
  const [shipping, setShipping] = useState('9.95')
 
  const [subtotal, setSubtotal] = useState(cartInfo.reduce((total, cartInfo) => total += parseInt(cartInfo.price), 0))
  const navigate = useNavigate()
  
function handleQuantityChange(e) {
  e.preventDefault()
  setAmount(e.target.value)
}

function updateQuantity(e) {
  e.preventDefault()
}

function handleShipping(e) {
  e.preventDefault()
  setShipping(e.target.value)
  console.log(shipping)
}

return (
  <div id="Cart">
    <header className="header">
      <h1>SuperUltraGolf.com</h1>
      <h4>Super Deals, Ultra Savings, all the time!</h4>

      <button onClick={() => 
        navigate('/', {state: {cartItems: cartInfo}})} className='homeButton' >
        <img src={home} className="homeIcon" alt="homepage" />
        <p>Home</p>
      </button>
    </header>
    {/* <div id="sidebar">
        <h1>Search and Filter</h1>
      </div> */}
     
    <div className="itemContainer">
    <h3>Your Cart</h3>
      {cartInfo.map(item => (
              <div className="cartCard" key ={item.name}>
                <div className="imageContainer"><img src={item.image} className="cartPic" alt={item.name} /></div>
                <div className="cartText"> 
                  <p>{item.name}</p>
                <div className="cartDescription">Details:
                  <p>{item.description}</p></div>
                </div>
                <div className="quantityContainer">
                  <form className="quantityForm" onClick={updateQuantity}>
                  <input className="quantityInput" type= 'number' placeholder= {item.quantity}
                         name= "quantity"  onChange={handleQuantityChange}></input>
                  <button className="quantityButton" type="submit">Update</button>
                </form>
                <button className="removeButton" type="submit">Remove</button> </div>
                <div className="cartPrice">${item.price}</div>
              </div>
              ))}
    </div>

    <div className="summaryContainer">
    <h3>Order Summary</h3>
    <div className="summary">
        <form className="quantityForm" onClick={updateQuantity}>
          <input className="couponInput" type= 'text' placeholder= 'Enter Coupon Code'
                 name= "coupon"  onChange={handleQuantityChange}></input>
          <button className="couponButton" type="submit">Apply</button>
        </form>
        <div className="subtotal">Subtotal: ${subtotal}</div>

        <label htmlFor="shippingSelect">Select Shipping:</label>
        <div className="select">
        <select id="shippingSelect" value={shipping} onChange={handleShipping}>
          <option value="9.95">Ground (3-5 Business Days): $9.95 </option>
          <option value="19.95">Priority (2 Business Days): $19.95</option>
          <option value="29.95">Express (Next Day): $29.95</option>
        </select>
        <span className="focus"></span>
        </div>
        <div className="tax">Tax: ${subtotal * .06}</div>
        <div className="orderTotal">Order Total: ${(subtotal * 0.06) + subtotal + parseInt(shipping)}</div>
        <button className="checkout">Secure Checkout</button>
        </div>
      </div>
        
    <div className='footer'>by JAUGS 2022</div>
  </div>
  )
  }

// function Favorite({ contact }) {
//   // yes, this is a `let` for later
//   let favorite = contact.favorite;
//   return (
//     <Form method="post">
//       <button
//         name="favorite"
//         value={favorite ? "false" : "true"}
//         aria-label={
//           favorite
//             ? "Remove from favorites"
//             : "Add to favorites"
//         }
//       >
//         {favorite ? "★" : "☆"}
//       </button>
//     </Form>
//   );
// }
import { useLocation, useNavigate } from "react-router-dom";
import home from '../images/home.svg'



export default function Cart(props) {


  const { state: { cartInfo } = {} } = useLocation();
  const navigate = useNavigate()
  
function displayProducts() {
  console.log(cartInfo)
}

return (
  <div id="cart">
    <header className="header">
      <h1>Welcome to the Store</h1>
      <button onClick={() => 
        navigate('/', {state: {cartItems: cartInfo}})} className='homeButton' >
        <img src={home} className="homeIcon" alt="homepage" />
        <p>Home</p>
      </button>
    </header>

    <button onClick={displayProducts}>eweggw</button>
        
    <div className="itemContainer">
      {cartInfo.map(item => (
              <div className="cartCard" key ={item.name}>
                <span className="name"> {item.name}</span>
                <div className="price">{item.price}</div>
                <div className="description">{item.description}</div>
               
              </div>
              ))}
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
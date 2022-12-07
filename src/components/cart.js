import { Link, useLocation } from "react-router-dom";
import home from '../images/home.svg'
export default function Cart(props) {



  // const [cartItems, setcartItems] = useState([{
  //   name: '',
  //   category: '',
  //   price: '',
  //   quantity: '',
  //   description: '',
  //   image: ''
  // }])

  // const [cartItems: cartInfo] = useLocation()
  const { state: { cartInfo } = {} } = useLocation();

function displayProducts() {
 // console.log(props.location.state.cartInfo)
  console.log(cartInfo)
}

return (
  <div id="cart">
    <h2>Your Shopping Cart:</h2>
    <button onClick={displayProducts}>eweggw</button>
        {/* <div>
          <Form action="edit">
            <button type="submit">Edssit</button>
          </Form>
          <Form
            method="post"
            action="destroy"
            // onSubmit={(event) => {
            
            // }}
          >
            <button type="submit">Delete</button>
          </Form>
        </div>  */}

        <Link
        to='/'
        // state={{cartInfo: cartItems}}
        className='cartButton'>
        <img src={home} className="homeIcon" alt="homepage" />
        
      </Link>
    <div className="itemContainer">
      {/* {props.cartItems.map(item => (
              <div className="cartCard" key ={item.name}>
                <span className="name"> {item.name}</span>
                <div className="price">{item.price}</div>
                <div className="description">{item.description}</div>
               
              </div>
              ))} */}


    </div>
        
        
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
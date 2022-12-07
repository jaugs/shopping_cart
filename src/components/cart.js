import { Form } from "react-router-dom";

export default function Cart(props) {



  // const [cartItems, setcartItems] = useState([{
  //   name: '',
  //   category: '',
  //   price: '',
  //   quantity: '',
  //   description: '',
  //   image: ''
  // }])



function displayProducts() {
  console.log(props.products[0].name)
}


  return (
    <div id="cart">

   <button onClick={displayProducts}>eweggw
   </button>
        <div>
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
        </div> </div>
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

const cartArr = []

function Home(props) {


function addtoCart (item) {
    cartArr.push(item)
    console.log(cartArr)
    props.setcartItems(cartArr)
    console.log(props.cartItems)
    }

  return (
    <div id="home">
    {props.products.map(item => (
              <div className="productCard" key ={item.name}>
                <span className="name"> {item.name}</span>
                <div className="price">{item.price}</div>
                <div className="description">{item.description}</div>
                <button onClick={() => {addtoCart(item)}} className="buy">Add to Cart</button>
              </div>
    ))}
  
    </div>
  )
}

export default Home
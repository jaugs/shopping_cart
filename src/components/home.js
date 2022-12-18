import Sidebar from "./sidebar";

function Home(props) {

  function addtoCart (e, item) {
    item.inCart = true;
    item.quantity = item.quantity + 1
    let cartArr = props.products.filter(product => product.inCart === true);
    props.setcartItems(cartArr)
  }

  return (
    <div id="homeContainer">
      <Sidebar
      products = {props.products}
      cartItems = {props.cartItems}
      setcartItems = {props.setcartItems}
      filteredProducts = {props.filteredProducts}
      setFilteredProducts = {props.setFilteredProducts}
      search = {props.search}
      setSearch = {props.setSearch}
      />
      <div id="home">
        {props.filteredProducts.map(item => (
          <div className="productCard" key ={item.name}>
          <img src={item.image} className="productPic" alt={item.name}/>
          <div className="name"> {item.name} ${item.price}</div>
          <div className="description">{item.description}</div>
          {(props.cartItems.includes(item)) ? (<button>Item Added</button>) : 
          (<button onClick={(e) => {addtoCart(e, item)}} className="buy">Add to Cart</button>)}
          </div>     
        ))}
    </div>
  </div>
  )
}
export default Home
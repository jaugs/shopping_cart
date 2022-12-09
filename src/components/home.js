//import { useState, useEffect } from 'react';
//import { driver } from "localforage"
const cartArr = []

function Home(props) {



  // useEffect(() => {
  //   addtoCart()
  // });
  


  function addtoCart (item) {
    cartArr.push(item)
    //console.log(cartArr)
    props.setcartItems(cartArr)
    //console.log(props.cartItems)
    let price = props.cartItems.reduce((total, cartItem) => total += parseInt(cartItem.price), 0)
    console.log(price)
    if (price) {
    props.setTotalPrice(price)
    } else props.setTotalPrice(item.price)
    }

  return (
    <div id="home">
    {props.products.map(item => (
              <div className="productCard" key ={item.name}>
                <span className="name"> {item.name}</span>
                <div className="price">{item.price}</div>
                <div className="description">{item.description}</div>
                <img src={item.image} className="cartIcon" alt="shopping cart" />
                <button onClick={() => {addtoCart(item)}} className="buy">Add to Cart</button>
              </div>
    ))}

    </div>
  )
}

export default Home
//import { useState, useEffect } from 'react';
//import { driver } from "localforage"
const cartArr = []

function Home(props) {



  // useEffect(() => {
  //   addtoCart()
  // });
  


  function addtoCart (e, item) {
    if (cartArr.includes(item)) {
      return
    }
    item.quantity = item.quantity + 1
    cartArr.push(item)
    console.log(cartArr)
    props.setcartItems(cartArr)
    console.log(props.cartItems)
    let price = props.cartItems.reduce((total, cartItem) => total += parseInt(cartItem.price * cartItem.quantity), 0)
   //console.log(price)
    if (price) {
    props.setTotalPrice(price)
    } else props.setTotalPrice(item.price)
    console.log(e.target)
    e.target.innerText = ``
    }

  return (
    <div id="home">
    {props.products.map(item => (
              <div className="productCard" key ={item.name}>
               <img src={item.image} className="productPic" alt={item.name}/>
               <div className="name"> {item.name} ${item.price}</div>
               <div className="description">{item.description}</div>
               {(cartArr.includes(item)) ? (<button>Item Added</button>) : 
               (<button onClick={(e) => {addtoCart(e, item)}} className="buy">Add to Cart</button>)}
              </div>
    ))}

    </div>
  )
}

export default Home
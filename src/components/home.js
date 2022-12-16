//import { useState, useEffect } from 'react';
//import { driver } from "localforage"
const cartArr = []


function Home(props) {



  function addtoCart (e, item) {
   //let newArr = cartArr.filter(product => produc.t !== props.cartArr)
   // console.log(newArr)
    console.log(cartArr)
    console.log(props.cartItems)
    if (props.cartItems.includes(item)) {
      return
    }
    item.quantity = item.quantity + 1
    cartArr.push(item)
    props.setcartItems(cartArr)
    let price = props.cartItems.reduce((total, cartItem) => total += parseInt(cartItem.price * cartItem.quantity), 0)
   //console.log(price)
    if (price) {
    props.setTotalPrice(price)
    } else props.setTotalPrice(item.price)
    e.target.innerText = ``
    }

  return (
    <div id="home">
    {props.products.map(item => (
              <div className="productCard" key ={item.name}>
               <img src={item.image} className="productPic" alt={item.name}/>
               <div className="name"> {item.name} ${item.price}</div>
               <div className="description">{item.description}</div>
               {(props.cartItems.includes(item)) ? (<button>Item Added</button>) : 
               (<button onClick={(e) => {addtoCart(e, item)}} className="buy">Add to Cart</button>)}
              </div>
    ))}

    </div>
  )
}

export default Home
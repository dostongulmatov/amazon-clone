import React from 'react'
import "./Checkout.css"
import Subtotal from "./Subtotal.js"
import CheckoutProduct from './CheckoutProduct'
import { useStateValue } from './StateProvider'
function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img 
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/01/gift-certificates/consumer/2020/3rd/GCapp/bgc_banner_update_ap_EN_1024x90_20200807.jpg" 
          alt=""
        />
        <div>
          <h3>Hello, {user?.email}</h3>
          <h2 className="checkout__title">Your shopping Basket</h2>
        </div>
        {basket.map(item => (
          <CheckoutProduct 
            id={item.id}
            image={item.image}
            title={item.title}
            price={item.price}
            rating={item.rating}
          />))}
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  )
}

export default Checkout

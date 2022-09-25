import React from 'react';
import { faArrowRight, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './Cart.css'

const Cart = ({cart}) => {
  let price = 0;
  let shipping = 0;
  for(let product of cart){
    price = price + product.price;
    shipping = shipping + product.shipping;
  }
  let tax = parseFloat((price * 0.1).toFixed(2));
  const grandTotal = price + shipping + tax;
  return (
    <div className='container'>
      <h3 className="order-summary">Order Summary</h3>
        <div className="cart-info">
          <p>Selected Items: {cart.length}</p> 
          <p>Total Price: ${price}</p>
          <p>Total Shipping Charge: ${shipping}</p>
          <p>Tax: ${tax}</p>
          <h4>Grand Total: ${grandTotal}</h4>
        </div>
        <button className="clear-cart-btn">
          <p className="cart-text">Clear Cart</p>
          <FontAwesomeIcon
            icon={faTrashCan}
            style={{ fontSize: "16px" }}
          ></FontAwesomeIcon>
        </button>
        <button className="review-cart-btn">
          <p className="cart-text">Review Order</p>
          <FontAwesomeIcon
            icon={faArrowRight}
            style={{ fontSize: "20px" }}
          ></FontAwesomeIcon>
        </button>
    </div>
  );
};

export default Cart;
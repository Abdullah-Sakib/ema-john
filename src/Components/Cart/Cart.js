import React from 'react';
import { faArrowRight, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './Cart.css'

const Cart = ({cart}) => {
  return (
    <div>
      <h3 className="order-summary">Order Summary</h3>
        <div className="cart-info">
          <p>Selected Items: {cart.length}</p> 
          <p>Total Price: </p>
          <p>Total Shipping Charge: </p>
          <p>Tax: </p>
          <h4>Grand Total: </h4>
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
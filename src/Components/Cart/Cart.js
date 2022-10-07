import React from "react";
import { faArrowRight, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Cart.css";
import { Link } from "react-router-dom";

const Cart = ({ cart, handleClearCart }) => {
  let price = 0;
  let shipping = 0;
  let quantity = 0;
  for (let product of cart) {
    quantity = quantity + product.quantity;
    price = price + product.price * product.quantity;
    shipping = shipping + product.shipping;
  }
  let tax = parseFloat((price * 0.1).toFixed(2));
  const grandTotal = price + shipping + tax;
  return (
    <div className="container">
      <h3 className="order-summary">Order Summary</h3>
      <div className="cart-info">
        <p>Selected Items: {quantity}</p>
        <p>Total Price: ${price}</p>
        <p>Total Shipping Charge: ${shipping}</p>
        <p>Tax: ${tax}</p>
        <h4>Grand Total: ${grandTotal}</h4>
      </div>
      <button className="clear-cart-btn" onClick={handleClearCart}>
        <p className="cart-text">Clear Cart</p>
        <FontAwesomeIcon
          icon={faTrashCan}
          style={{ fontSize: "16px" }}
        ></FontAwesomeIcon>
      </button>
      <Link to='/order' style={{textDecoration:'none'}}>
        <button className="review-cart-btn">
          <p className="cart-text">Review Order</p>
          <FontAwesomeIcon
            icon={faArrowRight}
            style={{ fontSize: "20px" }}
          ></FontAwesomeIcon>
        </button>
      </Link>
    </div>
  );
};

export default Cart;

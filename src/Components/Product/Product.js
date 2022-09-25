import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Product.css";

const Product = ({ product, handleEvent }) => {
  const { name, img, seller, ratings, price } = product;
  return (
    <div className="cart">
      <img src={img} alt="" />
      <div className="cart-info">
        <h4 className="cart-name">{name}</h4>
        <h4 className="cart-price">Price: ${price}</h4>
        <p className="seller">Manufacturer: {seller}</p>
        <p className="ratings">Rating: {ratings} Stars</p>
      </div>
      <button className="cart-btn" onClick={() => handleEvent(product)}>
        <p className="btn-text">Add To Cart</p>
        <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
      </button>
    </div>
  );
};

export default Product;

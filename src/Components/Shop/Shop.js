import { faArrowRight, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  const handleAddToCart = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
  };
  return (
    <div className="shop">
      <div className="products-container">
        {products.map((product) => (
          <Product
            product={product}
            key={product.id}
            handleEvent={handleAddToCart}
          ></Product>
        ))}
      </div>
      <div className="cart-container">
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
    </div>
  );
};

export default Shop;

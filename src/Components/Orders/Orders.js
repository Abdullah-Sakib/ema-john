import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { deleteShoppingCart, removeFromDb } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import ReviewItem from "../ReviewItem/ReviewItem";
import "./Orders.css";

const Orders = () => {
  const { storedCarts } = useLoaderData();
  const [cart, setCart] = useState(storedCarts);

  const handleRemoveProduct = (id) => {
    const remaining = cart.filter(product => product.id !== id);
    setCart(remaining);
    removeFromDb(id);
  };

  const handleClearCart = () => {
    setCart([]);
    deleteShoppingCart();
  }

  return (
    <div>
      <div className="shop">
        <div className="review-items-container">
          {cart.map((product) => (
            <ReviewItem key={product.id} product={product} handleRemove={handleRemoveProduct}></ReviewItem>
          ))}
          {
            cart.length === 0 && <h2>No items found!! Plaese <Link to='/'>Shop</Link></h2>
          }
        </div>
        <div className="cart-container">
          <Cart cart={cart} handleClearCart={handleClearCart}></Cart>
        </div>
      </div>
    </div>
  );
};

export default Orders;

import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { addToDb, deleteShoppingCart, getStoredCart } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
  const products = useLoaderData();
  const [cart, setCart] = useState([]);

  const handleClearCart = () => {
    setCart([]);
    deleteShoppingCart();
  }
  
  useEffect(() => {
    const storedCarts = getStoredCart();
    const savedCart = [];
    for (const id in storedCarts) {
      const addedProduct = products.find(product => product.id === id);
      if(addedProduct){
        const quantity = storedCarts[id];
        addedProduct.quantity = quantity;
        savedCart.push(addedProduct);
      }
    }
    setCart(savedCart);
  }, [products]);

  const handleAddToCart = (product) => {
    let newCart = [];
    const exists = cart.find(item => item.id === product.id);
    if(!exists){
      product.quantity = 1;
      newCart = [...cart, product];
    }
    else{
      const rest = cart.filter(item => item.id !== product.id);
      exists.quantity = exists.quantity + 1;
      newCart = [...rest, exists];
    }
    setCart(newCart);
    addToDb(product.id);
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
        <Cart cart={cart} handleClearCart={handleClearCart}></Cart>
      </div>
    </div>
  );
};

export default Shop;

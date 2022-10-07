import { getStoredCart } from "../utilities/fakedb";

export const ProductsAndCarts = async () => {
  const productsData = await fetch('products.json');
  const products = await productsData.json();
  
  const savedCart = getStoredCart();
  const storedCarts = [];
  for(const id in savedCart){
    const savedProduct =  products.find(product => product.id === id);
    if(savedProduct){
      const quantity = savedCart[id];
      savedProduct.quantity = quantity;
      storedCarts.push(savedProduct);
    }
  }


  return {products, storedCarts};
};

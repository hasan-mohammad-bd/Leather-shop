import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Choosen from "../Choosen/Choosen";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  let chosen;


  useEffect(() => {
    fetch("product.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  //selecting product and send them to cart
  const addToCart = (selectedProduct) => {
    if (cart.length <= 3) {
      if (!cart.includes(selectedProduct)) {
        const newCart = [...cart, selectedProduct];
        setCart(newCart);
      }
    } else {
      alert("You can't add more than 4 items");
    }
  };

  //find a random card from Cart.
  const getRandomItem = () => {
    // get random index value
    const randomIndex = Math.floor(Math.random() * cart.length);

    // get random item
    const item = cart[randomIndex];
    chosen = item;

    return chosen;
    
 
  };

  return (
    <div className="shop-container">
      <div className="product-container">
        {products.map((product) => (
          <Product
            product={product}
            key={product.id}
            addToCart={addToCart}
          ></Product>
        ))}
      </div>
      <div>
        <h3>Selected Products</h3>
        {cart.map((singleCart) => (
          <Cart singleCart={singleCart} key={singleCart.id}></Cart>
        ))}
        <button onClick={getRandomItem}>Choose 1 for me</button>
        <Choosen chosen = {chosen}></Choosen>
        <button>Choose Again</button>
      </div>
    </div>
  );
};

export default Shop;

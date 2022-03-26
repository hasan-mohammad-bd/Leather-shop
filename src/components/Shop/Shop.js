import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Choosen from "../Choosen/Choosen";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [chosen, setChosen] = useState([]);


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

  //find a random product from Cart.
  const getRandomItem = () => {
    // get random index value
    const randomIndex = Math.floor(Math.random() * cart.length);

    // get random item
    const item = cart[randomIndex];
    if (item) {
      setChosen(item);
    }
  };

  //clear the cart
  const clearingCart = () => {
    const emptyArray = [];
    setCart(emptyArray);
  };

  //deleting an specific product
  const deletingProduct = (id) => {
    const cartAfterDelete = cart.filter((singleCart) => singleCart.id !== id);
    setCart(cartAfterDelete);
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
      <div className="cart-container">
        <h3>Selected Products</h3>
        <div className="selected-product-container">
          {cart.map((singleCart) => (
            <Cart
              singleCart={singleCart}
              key={singleCart.id}
              deletingProduct={deletingProduct}
            ></Cart>
          ))}
        </div>
        <div className="chosen-product-container">
          <button className="choose1" onClick={getRandomItem}>Choose 1 for me</button>
          <Choosen chosen={chosen}></Choosen>
        </div>
        <button className="choose-again-btn" onClick={clearingCart}>Choose Again</button>
      </div>
    </div>
  );
};

export default Shop;

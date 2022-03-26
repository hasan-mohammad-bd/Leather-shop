import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "./Product.css";

const Product = ({ product, addToCart }) => {
  const { image, name, price } = product;
  return (
    <div>
      <div className="card">
        <div className="img-holder">
          <img src={image} alt="" />
        </div>
        <h3>{name}</h3>
        <h5>Price: ${price}</h5>
        <button onClick={() => addToCart(product)}>
          <p>Add To Cart</p>
          <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
        </button>
      </div>
    </div>
  );
};

export default Product;

import React from "react";
import "./Cart.css";

const Cart = (props) => {
  const { image, name } = props.singleCart;
  return (
    <div>
      <div className="selected-cart">
        <div className="image-holder">
          <img src={image} alt="" />
        </div>
        <p>{name}</p>
        <button>delete</button>
      </div>
    </div>
  );
};

export default Cart;

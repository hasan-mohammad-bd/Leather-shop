import React from "react";
import "./Cart.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const Cart = (props) => {
  const { image, name,id } = props.singleCart;
  return (
    <div>
      <div className="selected-cart">
        <div className="image-holder">
          <img src={image} alt="" />
        </div>
        <p>{name}</p>
        <button  onClick={()=>props.deletingProduct(id)}><FontAwesomeIcon icon={faTrash}></FontAwesomeIcon></button>
      </div>
    </div>
  );
};

export default Cart;

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css';

const Product = (props) => {
    const {image, name, price} = props.product;
    return (
        <div>
            <div className="cart">
                <div className="img-holder">
                    <img src={image} alt="" />
                </div>
                <h4>{name}</h4>
                <h5>{price}</h5>
                <button><p>Add To Cart</p><FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
                </button>
            </div>
        </div>
    );
};

export default Product;
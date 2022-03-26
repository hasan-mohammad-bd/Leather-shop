import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart ] = useState([])

    useEffect(()=>{
        fetch("product.json")
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])

    //event handler
    const addToCart = selectedProduct =>{
        const newCart = [...cart, selectedProduct];
        setCart(newCart);
    }
    return (
        <div className='shop-container'>
            <div className='product-container'>
               {
                   products.map(product => <Product product={product} key = {product.id} addToCart={addToCart}></Product>)
               }
            </div>
            <div>
                <h3>Selected Products</h3>                
                {
                    cart.map(singleCart => <Cart singleCart = {singleCart} key = {singleCart.id} ></Cart>)
                }
            </div>
        </div>
    );
};

export default Shop;
import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProduct] = useState([])

    useEffect(()=>{
        fetch("product.json")
        .then(res => res.json())
        .then(data => setProduct(data))
    },[])
    return (
        <div className='shop-container'>
            <div className='product-container'>
               {
                   products.map(product => <Product product={product} key = {product.id}></Product>)
               }
            </div>
            <div>
                <Cart></Cart>
            </div>
        </div>
    );
};

export default Shop;
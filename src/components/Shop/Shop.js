import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [product, setProduct] = useState([])

    useEffect(()=>{
        fetch("product.json")
    },[])
    return (
        <div className='shop-container'>
            <div>
               <Product></Product>
            </div>
            <div>
                <Cart></Cart>
            </div>
        </div>
    );
};

export default Shop;
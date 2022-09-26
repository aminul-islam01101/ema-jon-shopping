import React, { useEffect, useState } from 'react';
import Cart from './Cart';

import ProductCard from './productCard';

const Shop = () => {
    const [data, setData] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const loadData = async () => {
            const response = await fetch('products.json');
            const displayData = await response.json();

            setData(displayData);
        };
        loadData();
    }, []);
    const clickHandler = (product) => {
        const newProduct = [...cart, product];
        setCart(newProduct);
    };

    return (
        <div className="container grid grid-cols-[4fr_1fr] gap-5 ">
            <div className="mt-20 grid grid-cols-2 gap-5 lg:grid-cols-3">
                {data.map((objItem) => (
                    <ProductCard key={objItem.id} product={objItem} clickHandler={clickHandler} />
                ))}
            </div>
            <Cart cart={cart} />
        </div>
    );
};

export default Shop;

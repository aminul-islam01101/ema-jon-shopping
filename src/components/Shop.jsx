/* eslint-disable no-param-reassign */
import React, { useEffect, useState } from 'react';
import { getStoredItem, setItem } from '../fakeDb/fakeDb';
import Cart from './Cart';

import ProductCard from './productCard';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const storedCart = getStoredItem('shopping-cart');

        const storedIdArray = Object.keys(storedCart);
        const savedCart = [];
        storedIdArray.forEach((id) => {
            const addedProducts = products.find((product) => product.id === id);
            if (addedProducts) {
                savedCart.push(addedProducts);
                const quantity = storedCart[id];
                addedProducts.quantity = quantity;
            }

            console.log(savedCart);

            setCart(savedCart);
        });
    }, [products]);

    useEffect(() => {
        const loadData = async () => {
            const response = await fetch('products.json');
            const displayData = await response.json();

            setProducts(displayData);
        };
        loadData();
    }, []);
    const clickHandler = (selectedProduct) => {
        let newCart = [];

        const exists = cart.find((product) => product.id === selectedProduct.id);
        if (!exists) {
            selectedProduct.quantity = 1;
            newCart = [...cart, selectedProduct];
        } else {
            const rest = cart.filter((product) => product.id !== selectedProduct.id);
            exists.quantity += 1;
            newCart = [...rest, exists];
        }

        setCart(newCart);
        setItem(selectedProduct.id);
    };
    const handleClearBtn = () => {
        localStorage.removeItem('shopping-cart');
        setCart([]);
    };

    return (
        <div className="container grid  grid-cols-[4fr_1fr]  gap-5">
            <div className="mt-20 grid grid-cols-2 gap-5 lg:grid-cols-3">
                {products.map((objItem) => (
                    <ProductCard key={objItem.id} product={objItem} clickHandler={clickHandler} />
                ))}
            </div>
            <div className="min-h-screen bg-orange-300 ">
                <Cart cart={cart} handleClearBtn={handleClearBtn} />
            </div>
        </div>
    );
};

export default Shop;

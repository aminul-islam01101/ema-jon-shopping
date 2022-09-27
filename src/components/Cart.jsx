/* eslint-disable no-restricted-syntax */
import React from 'react';

const Cart = ({ cart, handleClearBtn }) => {
    let total = 0;
    let shipping = 0;
    let quantity = 0;
    for (const product of cart) {
        quantity += product.quantity;
        total += product.price * product.quantity;
        shipping += product.shipping;
    }
    const tax = parseFloat((total * 0.1).toFixed(2));

    return (
        <div className=" sticky top-0 ">
            <h1 className="text-center text-2xl">Order summary</h1>
            <p className="my-5 text-center text-sm">items selected: {quantity}</p>
            <p className="my-5 text-center text-sm">Price : {total}</p>
            <p className="my-5 text-center text-sm">shipping: {shipping}</p>
            <p className="my-5 text-center text-sm">tax: {tax}</p>
            <p className="my-5 text-center text-sm font-bold">
                Grand Total: {total + shipping + tax}
            </p>
            <div className="flex justify-center">
                <button className="button " onClick={handleClearBtn} type="button">
                    clear cart
                </button>
            </div>
        </div>
    );
};

export default Cart;

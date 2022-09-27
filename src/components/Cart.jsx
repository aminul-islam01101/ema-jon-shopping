import React from 'react';

const Cart = ({ cart }) => {
    console.log(cart);
    // total calc function
    const total = (param) => {
        const calculatedValue = cart.reduce((accumulator, cur) => accumulator + cur[param], 0);
        return calculatedValue;
    };
    const totaLPrice = total('price');
    const totaLShipping = total('shipping');
    const totaLTax = parseFloat((totaLPrice * 0.1).toFixed(2));

    return (
        <div className=" sticky top-0 ">
            <h1 className="text-center text-2xl">Order summary</h1>
            <p className="my-5 text-center text-sm">items selected: {cart.length}</p>
            <p className="my-5 text-center text-sm">Price : {totaLPrice}</p>
            <p className="my-5 text-center text-sm">shipping: {totaLShipping}</p>
            <p className="my-5 text-center text-sm">tax: {totaLTax}</p>
            <p className="my-5 text-center text-sm font-bold">
                Grand Total: {totaLPrice + totaLShipping + totaLTax}
            </p>
        </div>
    );
};

export default Cart;

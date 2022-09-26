import React from 'react';

const Cart = ({ cart }) => (
    <div className="bg-orange-300">
        <h1 className="text-center text-2xl">Order summary</h1>
        <p className="my-5 text-center text-sm">items selected: {cart.length}</p>
    </div>
);

export default Cart;

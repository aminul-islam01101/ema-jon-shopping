import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const CartBadge = ({ cart }) => {
    const quantity = cart.reduce((accumulator, current) => accumulator + current.quantity, 0);

    return (
        <div>
            <div className="indicator">
                <span className="badge indicator-item badge-secondary">{quantity}</span>
                <button type="button" className="rounded bg-slate-700 p-2">
                    <FontAwesomeIcon icon={faCartShopping} />
                </button>
            </div>
        </div>
    );
};

export default CartBadge;

import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import NotAvailable from '../Image_not_available.png';

const productCard = ({ product, clickHandler }) => {
    const { img, name, price, ratings } = product;
    return (
        <div>
            <div className="card h-full w-full bg-base-100 shadow-xl">
                <figure>
                    <img
                        src={img}
                        alt="Shoes"
                        onError={(e) => {
                            e.target.setAttribute('src', NotAvailable);
                        }}
                    />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <div className="">
                        <p>Price: ${price}</p>
                        <p>ratings: {ratings}</p>
                    </div>
                    <button
                        onClick={() => clickHandler(product)}
                        type="button"
                        className="button mt-auto bg-orange-500 hover:bg-orange-600"
                    >
                        Add to cart <FontAwesomeIcon icon={faCartShopping} />
                    </button>
                </div>
            </div>
        </div>
    );
};
export default productCard;

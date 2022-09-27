/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Logo from '../Logo.svg';
import CartBadge from './CartBadge';

const Nav = ({ cart }) => (
    <div>
        <div className="navbar bg-slate-500">
            <div className="flex-1">
                <a href="#">
                    <img src={Logo} alt="" />
                </a>
            </div>
            <div className="flex-none text-white">
                <ul className="menu menu-horizontal p-0">
                    <li>
                        <a href="#">
                            <CartBadge cart={cart} />
                        </a>
                    </li>
                    <li>
                        <a href="#">Order</a>
                    </li>
                    <li>
                        <a href="#">Order Review</a>
                    </li>

                    <li>
                        <a href="#">Login</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
);

export default Nav;

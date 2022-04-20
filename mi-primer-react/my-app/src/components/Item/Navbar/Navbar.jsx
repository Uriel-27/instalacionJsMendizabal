import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from '../CartWidget';

const Navbar = () => {
    return (
        <>
            <nav>
                <h1>Il Cioccolato</h1>
                <ul>
                    <Link style={{ margin: '0px 7px ' }} to="/">
                        Inicio
                    </Link>
                    <Link style={{ margin: '0px 7px ' }} to="/category/chocolates">
                        Chocolates
                    </Link>
                    <Link style={{ margin: '0px 7px ' }} to="/category/helados">
                        Helados
                    </Link>
                    <Link
                        style={{ margin: '0px 7px ' }}
                        to="/category/bebidas"
                    >
                        Bebidas
                    </Link>
                    <CartWidget />
                </ul>
            </nav>
            <hr />
        </>
    );
};

export default Navbar;
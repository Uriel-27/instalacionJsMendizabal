import React from 'react';
/* import { AiOutlineShoppingCart } from 'react-icons/ai'; */
import styles from './Navbar/Navbar.module.css';

const CartWidget = () => {
    return (
        <div className={styles.containerCartLogo}>
            {/* <AiOutlineShoppingCart size={22} /> */}
        </div>
    );
};

export default CartWidget;
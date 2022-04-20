import React, { useState } from 'react';
import styles from './ItemCount.module.css';

const ItemCount = ({ stock, initial, addCart }) => {
    const [number, setNumber] = useState(initial);

    const add = () => {
        number < stock && setNumber(number + 1);
    };

    const substract = () => {
        number > initial && setNumber(number - 1);
    };

    /*     const handleClick = () => {
        addCart(number);
    }; */

    return (
        <div className={styles.containerCount}>
            <div className={styles.containerButton}>
                <button disabled={number === stock} onClick={add}>
                    +
                </button>
                <p className={styles.number}>{number}</p>
                <button disabled={number === initial} onClick={substract}>
                    -
                </button>
            </div>
            <div>
                <button onClick={() => addCart(number)} className={styles.add}>
                    Add to cart
                </button>
            </div>
        </div>
    );
};

export default ItemCount;
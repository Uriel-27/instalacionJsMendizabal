import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ItemCount from './ItemCount';
import styles from './ItemDetail.module.css';

const ItemDetail = ({ img, name, price, stock, discount }) => {
    const [number, setNumber] = useState(0);

    const addCart = (cantidad) => {
        setNumber(cantidad);
    };

    /*  console.log(number); */

    return (
        <div className={styles.containerDetail}>
            <img src={img} alt={name} />
            <div className={styles.containerDetailInfo}>
                <h2>{name}</h2>
                <h2 className={styles.description}>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit
                </h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Officia voluptatem commodi architecto deleniti repudiandae
                    consectetur necessitatibus, id eaque suscipit vero.
                </p>
                <div className={styles.containerDetailInfoPrice}>
                    <h3>${price}</h3>
                    <h4>{discount}%</h4>
                </div>
                <h5>${price - price * (discount / 100)}</h5>

                <ItemCount stock={stock} initial={1} addCart={addCart} />
            </div>
        </div>
    );
};

export default ItemDetail;
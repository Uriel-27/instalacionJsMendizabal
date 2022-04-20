import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Item.module.css';

const Item = ({ product }) => {
    return (
        <div className={styles.card}>
            <img src={product.img} alt={product.name} />
            <div className={styles.cardInfo}>
                <h3>{product.name}</h3>
                <h4>$ {product.price}.-</h4>
                <h5>#{product.category}</h5>
                <Link to={`/item/${product.id}`}>Ver detalle</Link>
            </div>
        </div>
    );
};

export default Item;
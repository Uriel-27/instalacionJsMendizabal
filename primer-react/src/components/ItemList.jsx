import React from 'react';
import Item from './Item';

import styles from './Item.module.css';

const ItemList = ({ products }) => {
    return (
        <div className={styles.containerCards}>
            {products.map((product) => (
                <Item key={product.id} product={product} />
            ))}
        </div>
    );
};

export default ItemList;


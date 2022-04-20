import React from 'react';
import Item from './Item';

import styles from './Item.module.css';

const ItemList = ({ products }) => {
    return (
        <div className={styles.containerCards}>
            {products.map((producto) => (
                <Item key={producto.id} product={producto} />
            ))}
            {/* {products.map((producto) => {
                return (
                    <div>
                        <h1>{producto.price}</h1>;
                    </div>
                );
            })} */}
        </div>
    );
};

export default ItemList;
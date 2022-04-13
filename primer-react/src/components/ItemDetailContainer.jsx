import React, { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail';
import { traerProducto } from '../../utils/products';

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState({});

    useEffect(() => {
        /* fetch('https://fakestoreapi.com/products/1')
            .then((res) => res.json())
            .then((json) => console.log(json)); */
        traerProducto().then((res) => {
            setProducto(res);
        });
    }, []);

    return (
        <>
            <ItemDetail {...producto} />
        </>
    );
};

export default ItemDetailContainer;
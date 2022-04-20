import React, { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail';
import { traerProducto } from '../../utils/products';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState({});

    const { id } = useParams();

    useEffect(() => {
        traerProducto(id)
            .then((res) => {
                setProducto(res);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [id]);
    return (
        <>
            <ItemDetail {...producto} />
        </>
    );
};

export default ItemDetailContainer;
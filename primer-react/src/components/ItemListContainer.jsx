import React, { useEffect, useState } from 'react';
import { traerProductos } from '../utils/products';
import ItemList from './ItemList';

const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        traerProductos()
            .then((res) => setProducts(res))
            .catch((error) => console.log(error))
            .finally(() => {
                setLoading(false);
            });
    }, []);

    return (
        <>
            {loading ? (
                <h1>Cargando productos, espera por favor!</h1>
            ) : (
                <ItemList products={products} />
            )}
        </>
    );
};

export default ItemListContainer;
import React, { useEffect, useState } from 'react';
import { traerProductos } from '../../utils/products';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';

const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    const { categoryId } = useParams();

    console.log('!!!!!!!!', categoryId);

    useEffect(() => {
        setLoading(true);
        traerProductos(categoryId)
            .then((res) => setProducts(res))
            .catch((error) => console.log(error))
            .finally(() => {
                setLoading(false);
            });
    }, [categoryId]);

    //console.log(products);

    return (
        <div
            style={{
                minHeight: '90vh',
                display: 'flex',
                justifyContent: 'center',
            }}
        >
            {loading ? (
                <h1>Cargando productos, espera por favor!</h1>
            ) : (
                <ItemList products={products} />
            )}
        </div>
    );
};

export default ItemListContainer;
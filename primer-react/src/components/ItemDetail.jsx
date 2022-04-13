import React from 'react';
import Contador from './Contador';


const DetalleItem = ({ image, title, price }) => {
    return (
        <div>
            <img src={image} alt={title} />
            <div>
                <h2>{title}</h2>
                <h3>${price}</h3>
                <Contador />
            </div>
        </div>
    );
};

export default DetalleItem;
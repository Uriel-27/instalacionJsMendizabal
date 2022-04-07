import React from 'react';
import Item from './Item';

export default function ListaItems ({productos}) {
    return (
        productos.map (p => (
            <Item
            key={p.id}
            nombre={p.nombre}
            precio={p.precio}
            imagen={p.imagen}/>
        ))
             
    );
}


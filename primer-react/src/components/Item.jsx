import React from 'react';
import { Card } from "react-bootstrap";
import Contador from './Contador'

export default function Item ({id, nombre, precio, imagen }) {
return (
<>
    <Card key={id} style={{ width: '18rem' }}>
        <Card.Img variant="top" src={imagen} />
        <Card.Body>
            <Card.Title>{nombre}</Card.Title>
            <Card.Text>
             $ {precio}
            </Card.Text>
            <Contador stock={10}/>
        </Card.Body>
    </Card>
</>
);
}


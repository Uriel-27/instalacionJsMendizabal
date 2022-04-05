import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from 'react-bootstrap';


export default function ItemCount({ stock }) {

    const [count, setCount] = useState(0);

    function add(){
        if (count < stock){
        setCount(count + 1);
        }
    }

    function sub(){
        if (count > 0){
        setCount(count - 1);
        }
    }

    function onAdd(){
        if(count === 0){alert("No seleccionaste ningún producto");
        }
        if(count === 1){alert("Agregaste " + count +  " Producto a tu carrito")
        }
        if(count > 1){alert("Agregaste " + count + " Producto a tu carrito")
        }
    }

  return (
    <>
        <p>
            <Button variant="outline-danger" onClick={sub} class="mx-2">-</Button>{' '}
            {count}
            {' '}<Button variant="outline-success" onClick={add} class="mx-2">+</Button>
        </p>

        <p><Button onClick={onAdd} variant="outline-dark">Agregar al Carrito</Button></p>
        
    </>
  );
}
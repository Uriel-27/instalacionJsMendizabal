import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Contador from "./Contador";


export default function ItemListContainer({nombre, apellido}) {

  return (
    <>
    <div className="contador container mt-5">
        <Contador stock={100}/>
        <div className="bienvenidos">
          <p className="text-center mt-5">Bienvenido, {nombre} {apellido}</p>
        </div>
    </div>
      
    </>
  );
}
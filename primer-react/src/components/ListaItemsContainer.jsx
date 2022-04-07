import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import customFetch from "../utils/customFetch";
import productos from '../utils/productos';
import ListaItems from "./ListaItems";


export default function ListaItemsContainer() {
  const [Item, setItem] = useState([]);

  useEffect(() => {
    customFetch(3000, productos)
    .then(resultado => setItem(resultado))
    .catch(error => console.log(error));
  }, [Item])


  return (
    <>
    <div className="text-center mt-5 d-flex justify-content-center">
    <ListaItems productos={Item}/>
    </div>
    </>
  );
}
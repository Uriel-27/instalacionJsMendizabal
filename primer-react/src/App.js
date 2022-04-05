import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from "./components/Menu";
import ListaItemsContainer from "./components/ListaItemsContainer";

function App() {

  return (
    <>
    <Menu/>

    {<ListaItemsContainer nombre={"Uriel"} apellido={"Mendizabal"} />}
    </>
  );
}

export default App;

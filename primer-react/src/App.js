import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from "./components/Menu";
import ItemListContainer from "./components/ItemListContainer";

function App() {

  return (
    <>
    <Menu/>

    {<ItemListContainer nombre={"Uriel"} apellido={"Mendizabal"} />}
    </>
  );
}

export default App;

import React, { createContext, useState } from "react";
import { useEffect } from "react";

// 1. Creamos el contexto con createContext();
export const CarContext = createContext({});

const CarContextProvider = (props) => {

  // Almacenador de todos los productos
  const [all_products, setAll_Products] = useState([]);

  useEffect(()=>{
    fetch('http://localhost:8087/allcars')
    .then((response)=>response.json())
    .then((data)=>setAll_Products(data));

  },[]);
    console.log("Array obtenido: ", all_products);

   // Valores del contexto que se proporcionan a los componentes hijos
   const contextValue = {
    all_products
   };

   return (
    // Proveedor del contexto con los valores definidos
    <CarContext.Provider value={contextValue}>
      {props.children} {/* Renderiza los componentes hijos que usan el contexto */}
    </CarContext.Provider>
   );


};
export default CarContextProvider;


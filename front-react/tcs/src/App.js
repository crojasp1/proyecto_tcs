import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Header from './components/Header';
import Contactanos from "./pages/Contactanos";
import Quieres from "./pages/Quieres";
import Eventos from "./pages/Eventos";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">

<BrowserRouter>
      <Routes>
            <Route path="/" element={<Header/>}/>
            <Route index element={<Home/>}/> 
            <Route path="Contactanos" element={<Contactanos/>}/> 
            <Route path="Quieres" element={  <Quieres/>}/>
            <Route path="Eventos" element={ <Eventos/> }/>      
      </Routes>
</BrowserRouter>
    </div>
  );
}

export default App;

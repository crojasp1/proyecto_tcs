import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Header from "./components/Header";
import Contactanos from "./pages/Contactanos";
import Quieres from "./pages/Quieres";
import Eventos from "./pages/Eventos";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CarBrandsDropdown from "./components/CarDropdown/DropDown";
import ShopCategory from "./pages/ShopCategory";
import Product from "./pages/Product";
//import LoginSignup from './pages/LoginSignup';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header />} />
          <Route index element={<Home />} />
          <Route path="Contactanos" element={<Contactanos />} />
          <Route path="Quieres" element={<Quieres />} />
          <Route path="Eventos" element={<Eventos />} />

          <Route path="/Mercedes" element={<ShopCategory marca="Mercedes" />}/>
          <Route path="/Toyota" element={<ShopCategory marca="Toyota" />} />
          <Route path="/Ford" element={<ShopCategory marca="Ford" />} />
          <Route path="/BMW" element={<ShopCategory marca="BMW" />} />
          <Route path="/product" element={<Product />}>
            <Route path=":productId" element={<Product />} />
          </Route>

          {/*<Route path="/:brand" element={<CarPage />} /> */}
          {/*<Route path='/login' element={<LoginSignup/>}/> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

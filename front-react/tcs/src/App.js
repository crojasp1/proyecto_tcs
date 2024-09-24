import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Header from './components/Header';
import Banner from './components/Banner';
import Main from './components/Main';
import Tags from './components/Tags';
import Footer from './components/Footer'; 

function App() {
  return (
    <div className="App">
      <Header/>
      <Banner/>
      <Main/>
      <Tags/>
      <Footer/>
    </div>
  );
}

export default App;

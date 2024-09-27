import React from 'react'
import Header from '../components/Header';
import Banner from '../components/Banner';
import Main from '../components/Main';
import Tags from '../components/Tags';
import Footer from '../components/Footer'; 


function Home() {
  return (
    <div className="Home">
    <Header/>
    <Banner/>
    <Main/>
    <Tags/>
    <Footer/>
    </div>
  )
}

export default Home
import React from "react"; 
import { HashRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Footer from "./Components/Footer";
import About from "./container/about/index";
import Shop from "./container/shop/index";


 


export default function App() {
  return (
    <HashRouter>
      <div>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/shop" element={<Shop />} />
         
        </Routes>

        <Footer />
      </div>
    </HashRouter>    
  );
}

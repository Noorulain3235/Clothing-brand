import React from "react"; 
import { HashRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Footer from "./Components/Footer";
import About from "./container/About";

function Main() {
  return (
    <>
      <Home />
    </>
  );
}

export default function App() {
  return (
    <HashRouter>
      <div>
        <Navbar />

        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<About />} />
        </Routes>

        <Footer />
      </div>
    </HashRouter>    
  );
}

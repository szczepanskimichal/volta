// import { Route, Routes } from "react-router-dom";
import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Offer from "./components/Offer";

import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Offer />

      <Gallery />
      <Contact />
      <Footer />
    </>
  );
};

export default App;

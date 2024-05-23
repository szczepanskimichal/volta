import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
// import Services from "./components/Services";
// import Pricing from "./components/Pricing";
import Contact from "./components/Contact";
import Offer from "./components/Offer";
import Gallery from "./components/Gallery";
// import Reviews from "./components/Reviews";
const App = () => {
  return (
    <div>
      <Header />

      <Home />
      <About />
      <Offer />
      <Gallery />
      {/* <Services /> */}
      {/* <Pricing /> */}
      <Contact />
      {/* <Reviews /> */}

      <Footer />
    </div>
  );
};

export default App;

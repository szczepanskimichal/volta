import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Offer from "./components/Offer";
import Ie from "./components/Ie";
import Uziomy from "./components/Uziomy";
import Io from "./components/Io";
import Systems from "./components/Systems";
// import SystemCCTV from './components/SystemCCTV';
import Pe from "./components/Pe";
import Po from "./components/Po";
import Uu from "./components/Uu";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/header" element={<Header />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/offer" element={<Offer />} />
        <Route path="/ie" element={<Ie />} />
        <Route path="/uziomy" element={<Uziomy />} />
        <Route path="/io" element={<Io />} />
        <Route path="/Systems" element={<Systems />} />
        {/* <Route path="/SystemCCTV" element={<SystemCCTV />} /> */}
        <Route path="/pe" element={<Pe />} />
        <Route path="/po" element={<Po />} />
        <Route path="/uu" element={<Uu />} />
        <Route path="/Gallery" element={<Gallery />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;

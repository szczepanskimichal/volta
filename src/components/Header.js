import React from "react";
import {
  FaHome,
  FaInfoCircle,
  FaTools,
  FaDollarSign,
  FaPhone,
  FaComments,
} from "react-icons/fa";

const Header = () => {
  return (
    <header className="bg-blue-800  text-white p-4 fixed w-full top-0 z-50">
      <h1 className="text-3xl text-center">Usługi Elektryczne w Krośnie</h1>
      <nav className="mt-2">
        <ul className="flex justify-around">
          <li>
            <a href="#home" className="flex items-center">
              <FaHome /> Strona Główna
            </a>
          </li>
          <li>
            <a href="#about" className="flex items-center">
              <FaInfoCircle />
              VOLTA
            </a>
          </li>
          <li>
            <a href="#Offer" className="flex items-center">
              <FaTools /> Oferta
            </a>
          </li>
          <li>
            <a href="#Gallery" className="flex items-center">
              <FaDollarSign /> Galeria
            </a>
          </li>
          <li>
            <a href="#contact" className="flex items-center">
              <FaPhone /> Kontakt
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

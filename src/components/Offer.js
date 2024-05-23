//Offer.js
import { Link, Outlet } from "react-router-dom";
import React from "react";
import InstalacjeElektryczne from "./Ie";
import Uziomy from "./Uziomy";
import InstalacjeOdgromowe from "./Io";
import SystemyAlarmowe from "./Alarms";
import PomiaryElektryczne from "./Pe";
import PrzegladyOkresowe from "./Po";
import UsuwanieUsterkek from "./Uu";
import SystemCCTV from "./Systems";

const Offer = () => {
  return (
    <>
      <section className="pt-32 flex mx-auto max-w-4xl">
        <div className="w-1/2">
          <p>Oferta</p>
          <br />
          <ul>
            <li>
              <Link to="/Ie">Instalacje elektryczne</Link>
            </li>
            <li>
              <Link to="/Uziomy">Uziomy</Link>
            </li>
            <li>
              <Link to="/Io">Instalacje odgromowe</Link>
            </li>
            {/* <li>
              <Link to="/SystemyAlarmowe">Systemy alarmowe</Link>
            </li> */}
            <li>
              <Link to="/Systems">System CCTV (monitoring)</Link>
            </li>
            <li>
              <Link to="/Pe">Pomiary elektryczne</Link>
            </li>
            <li>
              <Link to="/Po">Przeglądy okresowe instalacji elektrycznych</Link>
            </li>
            <li>
              <Link to="/Uu">Usuwanie usterkek</Link>
            </li>
          </ul>
        </div>
        <Outlet />
        <div className="w-1/2">
          {/* Miejsce na zdjęcie lub animację */}
          <img src="ścieżka_do_zdjęcia.jpg" alt="Opis zdjęcia" />
        </div>
      </section>
    </>
  );
};

export default Offer;

import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const SubPage = ({ title, description, imagePath }) => (
  <div className="flex mx-auto max-w-4xl">
    <div className="w-1/2">
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
    <div className="w-1/2">
      <img src={imagePath} alt={title} />
    </div>
  </div>
);

const Offer = () => {
  return (
    <Router>
      <section className="pt-32 flex mx-auto max-w-4xl">
        <div className="w-1/2">
          <p>Oferta</p>
          <br />
          <ul>
            <li>
              <Link to="/instalacje-elektryczne">Instalacje elektryczne</Link>
            </li>
            <li>
              <Link to="/uziomy">Uziomy</Link>
            </li>
            <li>
              <Link to="/instalacje-odgromowe">Instalacje odgromowe</Link>
            </li>
            <li>
              <Link to="/systemy-alarmowe">Systemy alarmowe</Link>
            </li>
            <li>
              <Link to="/system-cctv">System CCTV (monitoring)</Link>
            </li>
            <li>
              <Link to="/pomiary-elektryczne">Pomiary elektryczne</Link>
            </li>
            <li>
              <Link to="/przeglady-okresowe">
                Przeglądy okresowe instalacji elektrycznych
              </Link>
            </li>
            <li>
              <Link to="/usuwanie-usterkek">Usuwanie usterkek</Link>
            </li>
          </ul>
        </div>
        <div className="w-1/2">
          {/* Miejsce na zdjęcie lub animację */}
          <img src="ścieżka_do_zdjęcia.jpg" alt="Opis zdjęcia" />
        </div>
      </section>

      <Route path="/instalacje-elektryczne">
        <SubPage
          title="Instalacje elektryczne"
          description="Opis instalacji elektrycznych."
          imagePath="ścieżka_do_zdjęcia.jpg"
        />
      </Route>
      {/* ...reszta tras... */}
    </Router>
  );
};

export default Offer;

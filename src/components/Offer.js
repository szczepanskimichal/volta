import { useState } from "react";
import { Outlet } from "react-router-dom";

import InstalacjeElektryczne from "./InstalacjeElektryczne";
import Uziomy from "./Uziomy";
import InstalacjeOdgromowe from "./InstalacjeOdgromowe";
import SystemCCTV from "./SystemCCTV";
import SystemyAlarmowe from "./SystemyAlarmowe";
import PomiaryElektryczne from "./PomiaryElektryczne";
import PrzegladyOkresowe from "./PrzegladyOkresowe";
import UsuwanieUsterek from "./UsuwanieUsterek";

const Offer = () => {
  const [selectedOffer, setSelectedOffer] = useState(null);

  const offers = [
    {
      name: "Instalacje Elektryczne",
      description: "Opis dla instalacji elektrycznych",
      component: <InstalacjeElektryczne />,
    },
    {
      name: "Uziomy",
      description: "Opis dla uziomów",
      component: <Uziomy />,
    },
    {
      name: "Instalacje Odgromowe",
      description: "Opis dla instalacji odgromowych",
      component: <InstalacjeOdgromowe />,
    },
    {
      name: "System CCTV",
      description: "Opis dla systemów CCTV",
      component: <SystemCCTV />,
    },
    {
      name: "Systemy Alarmowe",
      description: "Opis dla systemów alarmowych",
      component: <SystemyAlarmowe />,
    },
    {
      name: "Pomiary Elektryczne",
      description: "Opis dla pomiarów elektrycznych",
      component: <PomiaryElektryczne />,
    },
    {
      name: "Przeglady Okresowe",
      description: "Opis dla przeglądów okresowych",
      component: <PrzegladyOkresowe />,
    },
    {
      name: "Usuwanie Usterek",
      description: "Opis dla usuwania usterek",
      component: <UsuwanieUsterek />,
    },
    // Dodaj resztę ofert tutaj...
  ];

  const handleClick = (offer) => {
    setSelectedOffer(offer);
  };

  return (
    <>
      <section className="pt-32 flex mx-auto max-w-4xl">
        <div className="w-1/2">
          <p>Oferta</p>
          <br />
          <ul>
            {offers.map((offer) => (
              <li key={offer.name}>
                <a href={`/${offer.name}`} onClick={() => handleClick(offer)}>
                  {offer.name}
                </a>
              </li>
            ))}
          </ul>
          {selectedOffer && <p>{selectedOffer.description}</p>}
        </div>
        <Outlet />
        <div className="w-1/2">
          {/* Miejsce na zdjęcie lub animację */}
          <img src="ścieżka_do_zdjęcia.jpg" alt="Opis zdjęcia" />
        </div>
      </section>
      {selectedOffer && selectedOffer.component}
    </>
  );
};

export default Offer;

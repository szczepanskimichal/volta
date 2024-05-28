import React from "react";
import smartHomeImage from "../images/SmartHome.jpg";
import {
  MainContainer,
  Header,
  StyledImage,
  Paragraph,
  List,
  ListItem,
  MediaQuery,
} from "../components/Home.styled";

export const Home = () => {
  return (
    <main>
      <h1>Witaj!</h1>
      <img src={smartHomeImage} alt="SmartHome" />
      <p>
        Energia elektryczna to kluczowe medium, bez którego funkcjonowanie we
        współczesnym świecie byłoby praktycznie niemożliwe. Prąd zasila linie
        produkcyjne, sprzęt gospodarstwa domowego, billboardy reklamowe,
        samochody czy ogrzewanie w domu. Z tego powodu nagłe przerwy w dostawie
        prądu powodują wiele niemiłych konsekwencji. W przypadku wystąpienia
        awarii warto skorzystać z moich usług elektrycznych w Krośnie – szybko i
        skutecznie zajmę się zwalczaniem wszelkich usterek instalacji
        elektrycznej. <br />
        <br />
        Przyjadę na miejsce awarii o każdej porze dnia i natychmiast zajmę się
        usunięciem problemu. Moja oferta usług elektrycznych w Krośnie i
        okolicach obejmuje również wymianę starej instalacji elektrycznej
        (często aluminiowej) na nową (często miedzianą) oraz zaprojektowanie i
        realizację całkowicie nowej instalacji. Można mi z powodzeniem także
        powierzyć takie usługi, jak zmiana miejsc istniejących punktów w domu,
        zawieszanie lamp, montaż rozdzielni oraz wykonanie pomiarów
        elektrycznych. Moje usługi elektryczne w Krośnie obejmują również
        podłączenie sprzętu AGD wraz z podbiciem karty gwarancyjnej, wymianę
        wyłączników oświetlenia i gniazdek, wymianę starych bezpieczników
        topikowych na nowe oraz wystawianie oświadczeń o stanie instalacji. Moja
        kompleksowa oferta pozwala sprostać wymaganiom i potrzebom wielu
        właścicieli domów i innych budynków. Jeżeli mieszkasz w Krośnie lub
        okolicach i poszukujesz usług dobrego elektryka, zapraszam do kontaktu.
        <br />
        <br />
        Wykonuję zlecenia terminowo i rzetelnie, mając świadomość, że od mojej
        pracy zależy bezpieczeństwo domowników czy użytkowników lokalu. Moje
        kwalifikacje, odpowiednie uprawnienia i doświadczenie zapewniają wysoką
        jakość realizowanych usług. Warto wiedzieć, że w zakres moich usług
        elektrycznych w Krośnie i jego okolicach wchodzi również instalacja
        domofonowa, głośnikowa, alarmowa, przepięciowa. Oferta obejmuje także
        zmiany przydziału mocy, pomiar natężenia oświetlenia, szukanie
        uszkodzonych przewodów w ścianie i ich naprawę. Sprawdź już dzisiaj moją
        ofertę usług. <br />
        <br />
        Świadczę dla Państwa następujące usługi elektryczne na terenie Krosna i
        okolic: <br />
        <br />
        Wykonanie instalacji elektrycznej
        <br /> Wymiana starej instalacji (najczęściej aluminiowej) na nową
        (miedzianą) <br />
        Dołożenie dodatkowych punktów lub zmiana miejsca istniejących punktów w
        mieszkaniu
        <br /> Podłączenie sprzętu AGD wraz z podbiciem karty gwarancyjnej
        <br /> Zawieszanie lamp
        <br /> Wymiana starych bezpieczników topikowych na nowe typu „S”
        <br /> Wymiana gniazdek i wyłączników oświetlenia
        <br /> Wystawianie oświadczeń o stanie instalacji
        <br /> Montaż rozdzielni
        <br />
        Pomiary elektryczne
      </p>
    </main>
  );
};

import { Outlet } from "react-router-dom";

export const About = () => {
  return (
    <main>
      {/* <h1>O Volta</h1> */}
      <br />
      <p>
        Volta Piotr Szczepański Instalacje elektryczne Krościenko Wyżne Volta
        Piotr Szczepański Instalacje elektryczne.
        <br />
        <br /> Działam w branży elektrycznej od 2020 roku. Swoje usługi świadczę
        w województwie podkarpackim. <br />
        <br />
        Moją specjalnością są instalacje elektryczne, systemy alarmowe oraz
        monitoring. <br />
        <br />
        Wykonuję również badania okresowe i odbiorcze instalacji elektrycznych.
        Do każdego inwestora podchodzę w sposób indywidualny zapewniając
        doradztwo, pełną elastyczność oraz gwarancję terminowego wykonania
        zleconych prac. <br />
        <br />
        Świadczę również usługi serwisowe. Dbam o najwyższą jakość wykonywanych
        prac. Oferuję konkurencyjne ceny.
        <br />
        <br /> Dzięki zdobytemu doświadczeniu oraz posiadaniu niezbędnych
        uprawnień jestem w stanie wykonać wszelkie zlecone prace z zakresu
        instalacji elektrycznych.
      </p>
      <br />
      <img src="/images/szafa2.jpg" alt="szafa" />
      {/* <ul>
        <li>
          <Link to="mission">Cos napisac jeszcze o fiemie</Link>
        </li>
        <li>
          <Link to="team">tutaj o tobie</Link>
        </li>
        <li>
          <Link to="reviews">opinie o firmie</Link>
        </li>
      </ul>
      <Outlet /> */}
    </main>
  );
};

import { Outlet } from "react-router-dom";
import { Container, Header, Logo, Link } from "./SharedLayout.styles";
// import { Realizacje } from "../pages/Realizacje";
// import { Contact } from "../pages/Contact";

export const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <Logo>
          <span role="img" aria-label="logo">
            ⚡
          </span>{" "}
          Volta <br />
          SzczepanskiPiotr
        </Logo>
        <nav>
          <Link to="/" end>
            Home
          </Link>
          <Link to="about">O VOLTA</Link>
          <Link to="offer">Oferta</Link>
          <Link to="realizacje">Realizacje</Link>
          <Link to="contact">Kontakt</Link>
          <Link to="login">Logowanie</Link>
        </nav>
      </Header>
      <Outlet />
    </Container>
  );
};

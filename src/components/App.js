import { Route, Routes } from "react-router-dom";
import { About } from "../pages/About";
import { Home } from "../pages/Home";
import { Offer } from "../pages/Offer";
import { OfferDetails } from "../pages/OfferDetails";
import { SharedLayout } from "./SharedLayout";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="offer" element={<Offer />} />
        <Route path="offer/:id" element={<OfferDetails />} />
      </Route>
    </Routes>
  );
};

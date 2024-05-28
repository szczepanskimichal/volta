import { Route, Routes } from "react-router-dom";
import { About } from "../pages/About";
import { Home } from "../pages/Home";
import { Contact } from "../pages/Contact";

import { ProductDetails } from "../pages/ProductDetails";
import { Products } from "../pages/Products";
import { SharedLayout } from "./SharedLayout";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="offer" element={<Products />} />
        <Route path="offer/:id" element={<ProductDetails />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  );
};

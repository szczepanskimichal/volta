import { useParams, useLocation } from "react-router-dom";
import { ProductList } from "../components/ProductList";
import { getRealizacje } from "../RealizacjeAPI";
import { useSearchParams } from "react-router-dom";

export const Realizacje = () => {
  const realizacje = getRealizacje(); // Fix: Replace 'ralizacje' with 'realizacje'
  const [searchParams, setSearchParams] = useSearchParams();
  const realizacjeName = searchParams.get("name") ?? "";

  const visibleProducts = realizacje.filter((realizacje) =>
    realizacje.name.toLowerCase().includes(realizacjeName.toLowerCase())
  );
  return (
    <main>
      <ProductList products={visibleProducts} />
    </main>
  );
};

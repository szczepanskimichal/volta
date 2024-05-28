import { useParams, useLocation } from "react-router-dom";
import { BackLink } from "../components/BackLink";
import { getProductById } from "../fakeAPI";

export const ProductDetails = () => {
  const { id } = useParams();
  const product = getProductById(id);
  const location = useLocation();
  const backLinkHref = location.state?.from ?? "/products";

  return (
    <main>
      <BackLink to={backLinkHref}>Back to products</BackLink>
      <img src={product.img} alt={product.name} />
      <div>
        <h2>
          Product - {product.name} - {id}
        </h2>
        <p>{product.description}</p>
      </div>
    </main>
  );
};

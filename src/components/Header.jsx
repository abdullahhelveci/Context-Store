import { Link } from "react-router-dom";
import { SlBasketLoaded } from "react-icons/sl";
import { useContext } from "react";
import { BasketContext } from "../context/basketContext";

const Header = () => {
  const { basket } = useContext(BasketContext);
  const total = basket.reduce((total, i) => total + i.amount, 0);
  return (
    <header className="d-flex justify-content-between align-items-center p-4 sticky-top bg-dark">
      <Link to={"/"}>
        <h2>Context Store</h2>
      </Link>

      <Link to={"/sepet"}>
        <SlBasketLoaded />
        <i className="bi bi-cart2 fs-2 text-light"></i>
        <span className="badge bg-danger mx-2">{total}</span>
      </Link>
    </header>
  );
};

export default Header;

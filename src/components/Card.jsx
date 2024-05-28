import { useContext } from "react";
import { BasketContext } from "../context/basketContext";

const Card = ({ item }) => {
  const context = useContext(BasketContext);
  console.log(context);

  return (
    <div className="card py-2" style={{ width: "250px" }}>
      <div className="d-flex justify-content-center">
        <img src={item.image} height={120} className="obrext-fit-contain" />
      </div>

      <div>
        <h4>{item.title.slice(0, 30) + "..."}</h4>
        <p>${item.price}</p>
        <p>{item.category}</p>
        <button
          className="w-100 bg-danger"
          onClick={() => context.addToBasket(item)}
        >
          sepete ekle
        </button>
      </div>
    </div>
  );
};

export default Card;

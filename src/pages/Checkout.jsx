import { useContext } from "react";
import { BasketContext } from "../context/basketContext";

const Checkout = () => {
  const context = useContext(BasketContext);

  console.log(context);
  return (
    <div>
      {context.basket.length === 0 && (
        <h3 className="text-center my-5">öncelikle sepete ürün ekleyiniz</h3>
      )}

      {context.basket.length > 0 && <h3>toplam</h3>}

      {context.basket?.map((i) => (
        <div className="d-flex justify-content-between align-item-center p-2 gap-3 ">
          <img
            className="object-fit-contain rounded"
            src={i.image}
            height={100}
          />
          <h4>{i.title.slice(0, 20)}</h4>
          <h3>${(i.price * i.amount).toFixed(2)}</h3>
          <p>{i.amount} adet</p>

          <div>
            <button onClick={() => context.addToBasket(i)}>+</button>
            <button onClick={() => context.removeFromBasket(i.id)}>-</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Checkout;

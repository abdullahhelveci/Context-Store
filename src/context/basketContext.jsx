import { createContext, useState } from "react";

export const BasketContext = createContext();

export function BasketProvider({ children }) {
  const [basket, setBasket] = useState([]);

  const addToBasket = (product) => {
    const found = basket.find((i) => i.id === product.id);
    if (found) {
      const updated = { ...found, amount: found.amount + 1 };
      const newBasket = basket.map((i) => (i.id === updated.id ? updated : i));
      setBasket(newBasket);
    } else {
      setBasket([...basket, { ...product, amount: 1 }]);
    }
  };

  const removeFromBasket = (delete_id) => {
    const found = basket.find((i) => i.id === delete_id);

    if (found.amount > 1) {
      const updated = { ...found, amount: found.amount - 1 };
      const newBasket = basket.map((i) => (i.id === updated.id ? updated : i));
      setBasket(newBasket);
    } else {
      const filtered = basket.filter((i) => i.id !== delete_id);
      setBasket(filtered);
    }
  };

  return (
    <BasketContext.Provider value={{ basket, addToBasket, removeFromBasket }}>
      {children}
    </BasketContext.Provider>
  );
}

import { createContext, useCallback, useMemo, useState } from "react";

const defaultOrder = {
  orderId: "1",
  drinks: "奶茶",
  id: "tea01",
  iceLevel: "去冰",
  sugar: "少糖",
  toppings: "椰果",
};

export const OrderContext = createContext(defaultOrder);

export function OrderContextProvider({ children }) {
  const [orderData, setOrderData] = useState({});

  const updateOrder = useCallback(
    async ({ orderId, drinks, id, iceLevel, sugar, toppings }) => {
      const uuid = crypto.randomUUID();
      setOrderData({ orderId: uuid, drinks, id, iceLevel, sugar, toppings });
    },
    []
  );

  const contextValue = useMemo(
    () => ({
      orderData,
      updateOrder,
    }),
    [orderData, updateOrder]
  );

  return (
    <OrderContext.Provider value={contextValue}>
      {children}
    </OrderContext.Provider>
  );
}

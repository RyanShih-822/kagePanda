import { createContext, useMemo } from "react";

import useGetOrderData from "../hooks/useGetOrderData";

const defaultOrder = {
  orderId: "1",
  drinks: "奶茶",
  id: "tea01",
  iceLevel: "去冰",
  sugar: "少糖",
  toppings: "椰果",
};

export const OrderContext = createContext([defaultOrder]);

export function OrderContextProvider({ children }) {
  const { data, getOrderDataHandler } = useGetOrderData();

  const contextValue = useMemo(
    () => ({
      data,
      getOrderDataHandler,
    }),
    [data, getOrderDataHandler]
  );

  return (
    <OrderContext.Provider value={contextValue}>
      {children}
    </OrderContext.Provider>
  );
}

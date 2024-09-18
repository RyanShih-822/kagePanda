import { useReducer, createContext, useMemo, useContext } from "react";

const defaultOrder = {
  orderId: "1",
  drinks: "奶茶",
  id: "tea01",
  iceLevel: "去冰",
  sugar: "少糖",
  toppings: "椰果",
};

export const OrderContext = createContext([defaultOrder]);

const reducer = (state, action) => {
  switch (action.type) {
    case "get":
      return [...action?.orderData];

    case "add":
      return [...state, { ...action?.orderItem }];

    case "update":
      return state.map((item) =>
        item?.orderId === action?.orderItem?.orderId ? action?.orderItem : item
      );

    case "delete":
      return state?.filter((item) => item?.orderId !== action?.orderId);

    default:
      return state;
  }
};

const initialOrder = [];

export function OrderContextProvider({ children }) {
  const [orderData, dispatch] = useReducer(reducer, initialOrder);

  const contextValue = useMemo(
    () => ({
      orderData,
      dispatch,
    }),
    [orderData, dispatch]
  );

  return (
    <OrderContext.Provider value={contextValue}>
      {children}
    </OrderContext.Provider>
  );
}

export function useOrderContext() {
  const context = useContext(OrderContext);

  if (!context) {
    throw Error("OrderContext should be used in OrderProvider");
  }

  return context;
}

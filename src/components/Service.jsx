import { Spinner, Dialog } from "../ui";
import ProductList from "./ProudctList";
import ShoppingCart from "./ShoppingCart.jsx";

import { OrderContextProvider } from "../context/orderContext.jsx";
import { DialogContextProvider } from "../context/dialogContext.jsx";

import useGetDrinkData from "../hooks/useGetDrinkData.jsx";

export default function Service() {
  const { data } = useGetDrinkData();

  if (data.length === 0) {
    return <Spinner />;
  }

  return (
    <section className="w-full d-flex flex-wrap justify-content-between align-items-start gap-4">
      <DialogContextProvider>
        <OrderContextProvider>
          {data?.map(({ title, productList }) => (
            <ProductList
              key={title}
              className="flex-fill"
              title={title}
              productList={productList}
            />
          ))}
          <ShoppingCart className="flex-fill" />

          <Dialog />
        </OrderContextProvider>
      </DialogContextProvider>
    </section>
  );
}

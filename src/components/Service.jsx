import ProductList from "./ProudctList";
import { Spinner } from "../ui";
import Order from "./Order";

import { OrderContextProvider } from "../context/orderContext.jsx";

import useGetDrinkData from "../hooks/useGetDrinkData.jsx";

export default function Service() {
  const { data } = useGetDrinkData();

  if (data.length === 0) {
    return <Spinner />;
  }

  return (
    <section className="w-full d-flex flex-wrap justify-content-between align-items-start gap-4">
      <OrderContextProvider>
        {data?.map(({ title, productList }) => (
          <ProductList
            key={title}
            className="flex-fill"
            title={title}
            productList={productList}
          />
        ))}
        <Order className="flex-fill" />
      </OrderContextProvider>
    </section>
  );
}

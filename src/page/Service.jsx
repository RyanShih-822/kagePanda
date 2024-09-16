import { Spinner, Dialog } from "@/components/ui";
import { ProductList } from "@/components/productList";
import { Order, OrderContextProvider } from "@/components/order";

import { DialogContextProvider } from "@/components/ui";

import { useGetDrinkData } from "@/hooks";

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
          <Order className="flex-fill" />

          <Dialog />
        </OrderContextProvider>
      </DialogContextProvider>
    </section>
  );
}

import { Dialog, Spinner } from "@/components/ui";
import { ProductList } from "@/components/productList";
import { Order, OrderContextProvider } from "@/components/order";

import { DialogContextProvider } from "@/components/ui";

import { useGetDrinkData } from "@/hooks";

export default function Service() {
  const { isLoading, data: drinkData } = useGetDrinkData();

  if (isLoading) {
    return <Spinner />;
  }

  if (drinkData?.length === 0) {
    return <div>目前尚無資料！</div>;
  }

  return (
    <section className="w-full d-flex flex-wrap justify-content-between align-items-start gap-4">
      <DialogContextProvider>
        <OrderContextProvider>
          {drinkData?.map(({ title, productList }) => (
            <ProductList key={title} title={title} productList={productList} />
          ))}
          <Order />

          <Dialog />
        </OrderContextProvider>
      </DialogContextProvider>
    </section>
  );
}

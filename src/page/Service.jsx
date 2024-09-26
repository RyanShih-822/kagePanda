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
    <section className="menu-section w-full gap-4 position-relative">
      <DialogContextProvider>
        <div className="drink-container gap-4">
          {drinkData?.map(({ title, productList }) => (
            <ProductList key={title} title={title} productList={productList} />
          ))}
        </div>
        <OrderContextProvider>
          <Order />
          <Dialog />
        </OrderContextProvider>
      </DialogContextProvider>
    </section>
  );
}

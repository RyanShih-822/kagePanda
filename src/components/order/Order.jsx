import { useEffect } from "react";

import { useGetOrderData } from "@/hooks";
import { useOrderContext } from "./OrderContext";

import { Card, Button, Spinner } from "@/components/ui";
import OrderItem from "./OrderItem";

export default function Order() {
  const { isLoading, data } = useGetOrderData();
  const { orderData, dispatch } = useOrderContext();

  useEffect(() => {
    if (!data) {
      return;
    }

    dispatch({ type: "get", orderData: data });
  }, [data, dispatch]);

  const totalPrice = orderData?.reduce((acc, curr) => {
    acc = acc + curr.price * curr.numbers;
    return acc;
  }, 0);

  if (isLoading) {
    return <Spinner />;
  }

  if (orderData?.length === 0) {
    <div>尚無訂單</div>;
  }

  return (
    <Card htmlTag="aside" className="aside">
      <h3>您的訂單</h3>
      <ul className="py-4">
        {orderData?.map(({ orderId, ...item }) => (
          <OrderItem key={orderId} orderId={orderId} {...item} />
        ))}
      </ul>

      <div>
        <h3>Total</h3>
        <h3>${totalPrice}</h3>
        <Button className="btn-primary w-full">付款</Button>
      </div>
    </Card>
  );
}

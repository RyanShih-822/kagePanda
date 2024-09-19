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
    return (
      <Card htmlTag="aside" className="aside">
        <Spinner />
      </Card>
    );
  }

  if (orderData?.length === 0) {
    return (
      <Card htmlTag="aside" className="aside">
        <div>尚無訂單</div>
      </Card>
    );
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
        <div className="d-flex">
          <h3>總計</h3>
          <h3>${totalPrice}</h3>
        </div>
        <Button className="btn-primary w-full">付款</Button>
      </div>
    </Card>
  );
}

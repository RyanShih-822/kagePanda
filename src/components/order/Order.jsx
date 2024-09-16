import { Card, Button } from "@/components/ui";
import OrderItem from "./OrderItem";

import { useOrderContext } from "./orderContext";

export default function Order() {
  const { data } = useOrderContext();

  const totalPrice = data?.reduce((acc, curr) => {
    acc = acc + curr.price * curr.numbers;
    return acc;
  }, 0);

  return (
    <Card htmlTag="aside" className="aside">
      {data?.length === 0 ? (
        <div>尚無訂單</div>
      ) : (
        <>
          <h3>您的訂單</h3>
          <ul className="py-4">
            {data?.map(({ orderId, ...item }) => (
              <OrderItem key={orderId} orderId={orderId} {...item} />
            ))}
          </ul>

          <div>
            <h3>Total</h3>
            <h3>${totalPrice}</h3>
            <Button className="btn-primary w-full">付款</Button>
          </div>
        </>
      )}
    </Card>
  );
}

import { Card, Button, Spinner } from "../ui";

import OrderItem from "./OrderItem";

import { useOrderContext } from "../context/orderContext";

export default function Order({ ...props }) {
  const { data } = useOrderContext();

  const totalPrice = data?.reduce((acc, curr) => {
    acc = acc + curr.price * curr.numbers;
    return acc;
  }, 0);

  return (
    <>
      <aside className="h-full" style={{ width: "352px" }}>
        <Card {...props}>
          {data?.length === 0 ? (
            <Spinner />
          ) : (
            <>
              <h3>您的訂單</h3>
              <ul className="py-4">
                {data?.map(({ drinkId, ...item }) => (
                  <OrderItem key={drinkId} {...item} />
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
      </aside>
    </>
  );
}

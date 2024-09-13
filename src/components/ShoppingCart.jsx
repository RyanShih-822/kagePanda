import { Card, Button, Spinner } from "../ui";

import ShoppingCartItem from "./ShoppingCartItem";

import { useOrderContext } from "../context/orderContext";

export default function ShoppingCart({ ...props }) {
  const { data } = useOrderContext();

  const totalPrice = data?.reduce((acc, curr) => {
    acc = acc + curr.price * curr.numbers;
    return acc;
  }, 0);

  return (
    <aside className="aside">
      <Card {...props}>
        {data?.length === 0 ? (
          <div>尚無訂單</div>
        ) : (
          <>
            <h3>您的訂單</h3>
            <ul className="py-4">
              {data?.map(({ orderId, ...item }) => (
                <ShoppingCartItem key={orderId} orderId={orderId} {...item} />
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
  );
}

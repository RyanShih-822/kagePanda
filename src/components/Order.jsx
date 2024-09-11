import { useContext } from "react";

import { Card, Button, Spinner } from "../ui";

import { OrderContext } from "../context/orderContext";

export default function Order({ ...props }) {
  const { data } = useContext(OrderContext);

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
                {data?.map((item) => (
                  <li className="mb-4 " key={item.orderId}>
                    <Button className="w-full btn-transparent p-2">
                      <div className="d-flex justify-content-between">
                        <div className="w-24 h-24">
                          <img src={item.image} alt="訂單" />
                        </div>
                        <div className="text-end">
                          <div>{item.name}</div>
                          <div>{item?.orderConfig?.iceLevels?.name}</div>
                          <div>{item?.orderConfig?.sugar.name}</div>
                          <div>{item?.orderConfig?.toppings?.name}</div>
                        </div>
                      </div>
                    </Button>
                  </li>
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

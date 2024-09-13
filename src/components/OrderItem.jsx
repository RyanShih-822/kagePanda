import { Button } from "../ui";
import ProductForm from "./ProdudctForm";

import { useOrderContext } from "../context/orderContext";
import { useDialogContext } from "../context/dialogContext";

import useDeleteOrderData from "../hooks/useDeleteOrder";

export default function OrderItem({
  orderId,
  price,
  optionConf,
  numbers,
  name,
  image,
  orderConfig,
  user,
  comment,
}) {
  const { iceLevels, sugar, toppings } = orderConfig;

  const { deleteOrderDataHandler } = useDeleteOrderData();
  const { getOrderDataHandler } = useOrderContext();
  const { onOpen } = useDialogContext();

  function clickDialogHandler() {
    onOpen({
      title: name,
      component: (
        <ProductForm
          key={Math.random()}
          id={orderId}
          name={name}
          price={price}
          image={image}
          optionConf={optionConf}
          values={numbers}
          orderConfig={orderConfig}
          orderId={orderId}
          user={user}
          comment={comment}
        />
      ),
    });
  }

  function deleteOrderHandler() {
    const confirmStatus = window.confirm("確定要刪除訂單嗎？");

    if (confirmStatus === false) {
      return;
    }

    deleteOrderDataHandler(orderId);
    getOrderDataHandler();
  }

  return (
    <>
      <li className="d-flex gap-4 mb-4">
        <Button
          className="d-flex justify-content-between w-full btn-transparent p-2"
          onClick={clickDialogHandler}
        >
          <div className="w-24 h-24">
            <img src={image} alt="訂單" />
          </div>
          <div className="text-end">
            <div>{name}</div>
            <div>{iceLevels}</div>
            <div>{sugar}</div>
            <div>{toppings}</div>
          </div>
        </Button>
        <Button
          className="btn-secondary whitespace-nowrap align-self-cetner"
          onClick={deleteOrderHandler}
        >
          垃圾桶
        </Button>
      </li>
    </>
  );
}

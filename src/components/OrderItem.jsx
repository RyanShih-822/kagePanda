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
}) {
  const { iceLevels, sugar, toppings } = orderConfig;

  const { onOpen, onClose } = useDialogContext();

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
          onClose={onClose}
          values={numbers}
          userOrderConfig={orderConfig}
          orderId={orderId}
        />
      ),
    });
  }

  function deleteOrderHandler() {
    deleteOrderDataHandler(orderId);
    getOrderDataHandler();
  }

  const { deleteOrderDataHandler } = useDeleteOrderData();
  const { getOrderDataHandler } = useOrderContext();
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
            <div>{iceLevels?.name}</div>
            <div>{sugar.name}</div>
            <div>{toppings?.name}</div>
          </div>
        </Button>
        <Button onClick={deleteOrderHandler}>垃圾桶</Button>
      </li>
    </>
  );
}

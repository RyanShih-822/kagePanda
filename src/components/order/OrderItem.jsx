import { Button, useDialogContext } from "@/components/ui";
import { ProductForm } from "@/components/productForm";

import { useOrderContext } from "@/components/order";
import { useDeleteOrderData } from "@/hooks";

export default function OrderItem({
  drinkId,
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
  const { iceLevels, sugar, toppings } = orderConfig || {};
  const editOrderConfig = {
    iceLevels: iceLevels.title,
    sugar: sugar.title,
    toppings: toppings.title,
  };

  const { fetchHandler: deleteOrderDataHandler } = useDeleteOrderData(orderId);
  const { dispatch } = useOrderContext();
  const { onOpen } = useDialogContext();

  function clickDialogHandler() {
    onOpen({
      title: name,
      component: (
        <ProductForm
          key={Math.random()}
          id={drinkId}
          price={price}
          image={image}
          optionConf={optionConf}
          values={numbers}
          orderConfig={editOrderConfig}
          orderId={orderId}
          user={user}
          comment={comment}
          type="update"
          buttonText="更新購物車"
        />
      ),
    });
  }

  const deleteOrderHandler = async () => {
    const confirmStatus = window.confirm("確定要刪除訂單嗎？");

    if (confirmStatus === false) {
      return;
    }

    await deleteOrderDataHandler();
    dispatch({ type: "delete", orderId });
  };

  return (
    <>
      <li className="d-flex gap-4 mb-4 justify-content-center">
        <Button
          className="flex-auto d-flex gap-4 align-items-center justify-content-between p-4 overflow-hidden"
          onClick={clickDialogHandler}
        >
          <div className="basis-24 h-24">
            <img src={image} alt="訂單" />
          </div>
          <div className="basis-1/3 single-ellipsis">{user}</div>

          <div className="basis-2/3 text-end overflow-hidden">
            <div className="single-ellipsis">{name}</div>
            <div className="single-ellipsis">{iceLevels.name}</div>
            <div className="single-ellipsis">{sugar.name}</div>
            <div className="single-ellipsis">{toppings.name}</div>
          </div>
        </Button>
        <Button
          className=" btn-secondary whitespace-nowrap align-self-center"
          onClick={deleteOrderHandler}
        >
          垃圾桶
        </Button>
      </li>
    </>
  );
}

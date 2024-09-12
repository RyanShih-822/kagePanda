import { useState } from "react";

import { Button } from "../ui";
import FormOptions from "./FormOptions";
import InputNumber from "./InputNumber";

import useInputNumber from "../hooks/useInputNumber";
import useCreateOrderData from "../hooks/useUpdateOrderData";
import { useOrderContext } from "../context/orderContext";

const defaultConfigOption = {
  iceLevels: null,
  sugar: null,
  toppings: null,
};

export default function ProductForm({
  id,
  price,
  image,
  optionConf,
  onClose,
  values = 1,
  userOrderConfig = defaultConfigOption,
  orderId = crypto.randomUUID(),
}) {
  const { counter, updateCounterHandler } = useInputNumber(values);
  const incrementHandler = () => {
    updateCounterHandler("add");
  };
  const decrementHandler = () => {
    updateCounterHandler("minus");
  };

  // cart logic
  const { loading, updateOrderDataHandler } = useCreateOrderData();
  const { getOrderDataHandler } = useOrderContext();
  const [orderConfig, setOrderConfig] = useState(userOrderConfig);

  const updateConfigOptionHandler = (type, value) => {
    setOrderConfig({
      ...orderConfig,
      [type]: value,
    });
  };

  const isValidOption = !!(
    orderConfig?.iceLevels &&
    orderConfig?.sugar &&
    orderConfig?.toppings &&
    counter
  );

  const addCartHandler = async () => {
    if (!isValidOption) {
      return;
    }

    const orderData = {
      orderId,
      drinkId: id,
      orderConfig,
      numbers: counter,
    };
    await updateOrderDataHandler(orderData);

    setOrderConfig(defaultConfigOption);
    onClose();
    getOrderDataHandler();
  };

  return (
    <>
      <div className="overflow-y-auto py-4">
        <picture className="w-full" style={{ height: "376px" }}>
          <img src={image} alt="商品預覽照片" />
        </picture>

        <div className="my-4 px-4 d-flex flex-column gap-3">
          {optionConf?.map((item) => (
            <FormOptions
              key={item.configId}
              id={item.configId}
              optionTitle={item.title}
              optionDataArr={item.dataArr}
              updateConfigOptionHandler={updateConfigOptionHandler}
              orderConfig={orderConfig}
            />
          ))}
        </div>
      </div>

      <footer className="border-t border-gray p-4 d-flex justify-content-between align-items-center">
        <div>
          <span>總金額：</span>
          <span>{price * counter}元</span>
          <InputNumber
            value={counter}
            min={1}
            incrementHandler={incrementHandler}
            decrementHandler={decrementHandler}
          />
        </div>
        <Button
          disabled={!isValidOption}
          className={!isValidOption ? "" : "btn-primary"}
          onClick={addCartHandler}
        >
          {loading ? "等待中" : "加入購物車"}
        </Button>
      </footer>
    </>
  );
}

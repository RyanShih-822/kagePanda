import { useState } from "react";

import { Button } from "../ui";
import FormOptions from "./FormOptions";
import InputNumber from "./InputNumber";

import useInputNumber from "../hooks/useInputNumber";

import { createOrderData } from "../models/products";

export default function ProductForm({ id, name, price, image, optionConf }) {
  const { counter, updateCounterHandler } = useInputNumber(1, 1);
  const incrementHandler = () => {
    updateCounterHandler("add");
  };
  const decrementHandler = () => {
    updateCounterHandler("minus");
  };

  // cart logic
  const [configOption, setConfigOption] = useState({
    iceLevels: "",
    sugar: "",
    toppings: "",
  });

  const addConfigOptionHandler = (type, value) => {
    setConfigOption({
      ...configOption,
      [type]: value,
    });
  };

  const isValidOption = !!(
    configOption?.iceLevels &&
    configOption?.sugar &&
    configOption?.toppings &&
    counter
  );

  const addCartHandler = async () => {
    if (!isValidOption) {
      return;
    }

    const orderData = {
      orderId: crypto.randomUUID(),
      drinks: name,
      id,
      configOption: { ...configOption },
      numbers: counter,
    };
    const res = await createOrderData(orderData);

    console.log(res);
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
              addConfigOptionHandler={addConfigOptionHandler}
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
            incrementHandler={incrementHandler}
            decrementHandler={decrementHandler}
          />
        </div>
        <Button
          disabled={!isValidOption}
          className={!isValidOption ? "" : "bg-primary text-light"}
          onClick={addCartHandler}
        >
          加入購物車
        </Button>
      </footer>
    </>
  );
}

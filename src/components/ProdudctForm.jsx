import { useState } from "react";

import { Button, Textarea, Input } from "../ui";
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
  user = "",
  comment = "",
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

  const [formData, setFormData] = useState({ user: user, comment: comment });

  const updateConfigOptionHandler = (type, value) => {
    setOrderConfig({
      ...orderConfig,
      [type]: value,
    });
  };

  const changeInputHandler = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const isValidOption = !!(
    orderConfig?.iceLevels &&
    orderConfig?.sugar &&
    orderConfig?.toppings &&
    counter
  );

  const addCartHandler = async (e) => {
    e.preventDefault();
    if (!isValidOption) {
      return;
    }

    const orderData = {
      orderId,
      drinkId: id,
      orderConfig,
      numbers: counter,
      ...formData,
    };

    await updateOrderDataHandler(orderData);

    setOrderConfig(defaultConfigOption);
    onClose();
    getOrderDataHandler();
  };

  return (
    <form
      className="overflow-hidden  h-full d-flex flex-column"
      onSubmit={addCartHandler}
    >
      <div className="overflow-y-auto py-4 px-4">
        <picture className="w-full px-" style={{ height: "376px" }}>
          <img src={image} alt="商品預覽照片" />
        </picture>

        <div className="my-4 d-flex flex-column gap-3">
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

        <div>
          <label htmlFor="comment">
            <h3>餐點註解</h3>
          </label>
          <Textarea
            id="comment"
            name="comment"
            value={formData.comment}
            onChange={changeInputHandler}
          />
        </div>

        <div>
          <label htmlFor="user">
            <h3>訂購人姓名</h3>
          </label>
          <Input
            id="user"
            name="user"
            required
            value={formData.user}
            onChange={changeInputHandler}
          />
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
          type="submit"
          disabled={!isValidOption}
          className={!isValidOption ? "" : "btn-primary"}
        >
          {loading ? "等待中" : "加入購物車"}
        </Button>
      </footer>
    </form>
  );
}

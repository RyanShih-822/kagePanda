import { useState } from "react";

import { Button, Textarea, Input } from "@/components/ui";
import { InputNumber } from "@/components/inputNumber";
import ProductRadios from "./ProductRadios";

import { useUpdateOrderData, useCreateOrderData } from "@/hooks";
import { useOrderContext } from "@/components/order";
import { useDialogContext } from "@/components/ui";

const defaultConfigOption = {
  iceLevels: "",
  sugar: "",
  toppings: "",
};

export default function ProductForm({
  id,
  price,
  image,
  optionConf,
  values = 1,
  orderConfig = { ...defaultConfigOption },
  orderId = crypto.randomUUID(),
  user = "",
  comment = "",
  buttonText = "",
  type = "create",
}) {
  const { dispatch } = useOrderContext();

  const { onClose } = useDialogContext();

  const [formData, setFormData] = useState({
    user,
    comment,
    numbers: values,
    orderConfig,
  });

  const incrementHandler = () => {
    setFormData((prev) => ({
      ...prev,
      numbers: prev.numbers + 1,
    }));
  };

  const decrementHandler = () => {
    setFormData((prev) => ({
      ...prev,
      numbers: prev.numbers - 1,
    }));
  };

  const changeFormDataHandler = (e) => {
    const { name, value } = e.target;

    const isOrderConfig = !formData.hasOwnProperty(name);

    if (isOrderConfig) {
      setFormData((prev) => ({
        ...prev,
        orderConfig: { ...prev.orderConfig, [name]: value },
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const isValidOption = !!(
    formData?.orderConfig?.iceLevels &&
    formData?.orderConfig?.sugar &&
    formData?.orderConfig?.toppings &&
    formData?.user &&
    formData?.numbers
  );

  const orderItem = {
    orderId,
    drinkId: id,
    ...formData,
  };
  const { fetchHandler: createOrderDataHandler } =
    useCreateOrderData(orderItem);

  const { fetchHandler: updateOrderDataHandler } =
    useUpdateOrderData(orderItem);

  const createHandler = async () => {
    const data = await createOrderDataHandler();
    dispatch({ type: "add", orderItem: data });
  };

  const updateHandler = async () => {
    const data = await updateOrderDataHandler();
    dispatch({ type: "update", orderItem: data });
  };

  const addCartHandler = async (e) => {
    e.preventDefault();
    if (!isValidOption) {
      return;
    }

    if (type === "create") {
      await createHandler();
    } else {
      await updateHandler();
    }

    setFormData({
      user: "",
      comment: "",
      numbers: 1,
      orderConfig: { ...defaultConfigOption },
    });

    onClose();
  };

  return (
    <form
      className="overflow-hidden h-full d-flex flex-column"
      onSubmit={addCartHandler}
    >
      <div className="overflow-y-auto py-4 px-4">
        <picture className="w-full px-" style={{ height: "376px" }}>
          <img src={image} alt="商品預覽照片" />
        </picture>

        <div className="my-4 d-flex flex-column gap-3">
          {optionConf?.map((item) => (
            <ProductRadios
              key={item.configId}
              id={item.configId}
              optionTitle={item.title}
              optionDataArr={item.dataArr}
              updateConfigOptionHandler={changeFormDataHandler}
              orderConfig={formData?.orderConfig}
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
            value={formData?.comment}
            onChange={changeFormDataHandler}
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
            value={formData?.user}
            onChange={changeFormDataHandler}
          />
        </div>
      </div>

      <footer className="border-t border-gray p-4 d-flex justify-content-between align-items-center">
        <div>
          <span>總金額：</span>
          <span>{price * formData?.numbers}元</span>
          <InputNumber
            value={formData?.numbers}
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
          {buttonText}
        </Button>
      </footer>
    </form>
  );
}

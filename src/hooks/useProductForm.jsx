import { useState } from "react";

import useCreateOrderData from "../hooks/useUpdateOrderData";

import { useDialogContext } from "../context/dialogContext";
import { useOrderContext } from "../context/orderContext";

const defaultConfigOption = {
  iceLevels: "",
  sugar: "",
  toppings: "",
};

export default function userProductForm({
  orderId,
  drinkId,
  user,
  comment,
  numbers,
  orderConfig,
}) {
  const { updateOrderDataHandler } = useCreateOrderData();
  const { getOrderDataHandler } = useOrderContext();
  const { onClose } = useDialogContext();

  const [formData, setFormData] = useState({
    user: user,
    comment: comment,
    numbers: numbers,
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

  const addCartHandler = async (e) => {
    e.preventDefault();
    if (!isValidOption) {
      return;
    }

    const orderData = {
      orderId,
      drinkId,
      ...formData,
    };

    await updateOrderDataHandler(orderData);

    setFormData({
      user: "",
      comment: "",
      numbers: 1,
      orderConfig: { ...defaultConfigOption },
    });
    onClose();
    getOrderDataHandler();
  };

  return {
    formData,
    isValidOption,
    incrementHandler,
    decrementHandler,
    changeFormDataHandler,
    addCartHandler,
  };
}

import { useState, useCallback } from "react";
import { updateOrderData } from "../models/products";

export default function useUpdateOrderData() {
  const [status, setStatus] = useState(null);
  const [loading, setIsLoading] = useState(false);

  const updateOrderDataHandler = useCallback(
    async ({ orderId, drinkId, orderConfig, numbers }) => {
      setIsLoading(true);

      const res = await updateOrderData({
        orderId,
        drinkId,
        orderConfig,
        numbers,
      });

      if (res.status !== "success") {
        return;
      }

      setIsLoading(false);
      setStatus(res.status);
    },
    []
  );

  return { status, loading, updateOrderDataHandler };
}

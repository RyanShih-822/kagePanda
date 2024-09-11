import { useState, useCallback } from "react";
import { createOrderData } from "../models/products";

export default function useCreateOrderData() {
  const [status, setStatus] = useState(null);
  const [loading, setIsLoading] = useState(false);

  const createOrderDataHandler = useCallback(
    async ({ orderId, drinkId, orderConfig, numbers }) => {
      setIsLoading(true);

      const res = await createOrderData({
        orderId,
        drinkId,
        orderConfig,
        numbers,
      });

      if (res.status !== "success") return;

      setIsLoading(false);
      setStatus(res.status);
    },
    []
  );

  return { status, loading, createOrderDataHandler };
}

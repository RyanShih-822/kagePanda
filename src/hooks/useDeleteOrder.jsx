import { useState, useCallback } from "react";
import { deleteOrderData } from "@/models/products";

export default function useDeleteOrderData() {
  const [isLoading, setIsLoading] = useState(false);

  const deleteOrderDataHandler = useCallback(async (orderId) => {
    setIsLoading(true);

    await deleteOrderData(orderId);

    setIsLoading(false);
  }, []);

  return { isLoading, deleteOrderDataHandler };
}

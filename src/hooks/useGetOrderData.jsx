import { useState, useEffect, useCallback } from "react";
import { getOrderData } from "@/models/products";

export default function useGetOrderData() {
  const [orderData, setOrderData] = useState([]);

  const getOrderDataHandler = useCallback(async () => {
    const { data } = await getOrderData();

    setOrderData(data);
  }, []);

  useEffect(() => {
    getOrderDataHandler();
  }, [getOrderDataHandler]);

  return { data: orderData, getOrderDataHandler };
}

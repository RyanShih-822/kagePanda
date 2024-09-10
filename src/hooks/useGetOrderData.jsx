import { useState, useEffect } from "react";
import { getOrderData } from "../models/products";

export default function useGetOrderData() {
  const [orderData, setOrderData] = useState([]);
  useEffect(() => {
    async function fetchGetOrderData() {
      const { data } = await getOrderData();

      setOrderData(data);
    }

    fetchGetOrderData();
  }, []);

  return [orderData, setOrderData];
}

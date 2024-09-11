import { useState, useEffect, useCallback } from "react";
import { getProductData } from "../models/products";

export default function useGetDrinkData() {
  const [drinkData, setDrinkData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getProductDataHandler = useCallback(async () => {
    setIsLoading(true);
    const { data } = await getProductData();
    setDrinkData(data);
    setIsLoading(false);
  }, []);

  useEffect(() => {
    getProductDataHandler();
  }, [getProductDataHandler]);

  return { data: drinkData, isLoading, setDrinkData };
}

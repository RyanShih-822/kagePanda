import { useState, useEffect } from "react";
import { getProductData } from "../models/products";

export default function useDrinkData() {
  const [drinkData, setDrinkData] = useState([]);
  useEffect(() => {
    async function fetchGetProductData() {
      const { data } = await getProductData();

      setDrinkData(data);
    }

    fetchGetProductData();
  }, []);

  return [drinkData, setDrinkData];
}

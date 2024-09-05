import { useState, useEffect } from "react";
import { getProductData } from "../models/products";

import Product from "./Proudct";
import Order from "./Order";

export default function Service() {
  // fetch drink data
  const [drinkData, setDrinkData] = useState([]);
  useEffect(() => {
    async function fetchGetProductData() {
      const { data } = await getProductData();

      setDrinkData(Object.entries(data));
    }

    fetchGetProductData();
  }, []);

  if (drinkData.length === 0) {
    return <div>loading</div>;
  }

  return (
    <section className="w-full d-flex justify-content-between gap-4">
      <Product className="flex-fill" drinkData={drinkData} />
      <Order className="flex-fill" />
    </section>
  );
}

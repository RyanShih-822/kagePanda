import useQuery from "./useQuery";

import { getProductData } from "@/models/products";

async function getProductDataHanlder() {
  const { data } = await getProductData();
  return data;
}

export default function useGetDrinkData() {
  return useQuery({ queryFn: getProductDataHanlder });
}

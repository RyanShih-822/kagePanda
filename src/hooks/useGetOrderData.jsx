import useQuery from "./useQuery";

import { getOrderData } from "@/models/products";

async function getOrderDataHanlder() {
  const { data } = await getOrderData();
  return data;
}

export default function useGetOrderData() {
  return useQuery({ queryFn: getOrderDataHanlder });
}

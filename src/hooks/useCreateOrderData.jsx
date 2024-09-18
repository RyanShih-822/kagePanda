import useQuery from "./useQuery";
import { createOrderData } from "@/models/products";

async function createOrderDataHandler(orderData) {
  const { data } = await createOrderData(orderData);

  return data;
}

export default function useCreateOrderData(orderData) {
  return useQuery({
    queryFn: () => createOrderDataHandler(orderData),
    enabled: false,
  });
}

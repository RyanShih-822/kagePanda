import useQuery from "./useQuery";
import { updateOrderData } from "@/models/products";

async function updateOrderDataHandler(orderData) {
  const { data } = await updateOrderData(orderData);
  return data;
}

export default function useUpdateOrderData(orderData) {
  return useQuery({
    queryFn: () => updateOrderDataHandler(orderData),
    enabled: false,
  });
}

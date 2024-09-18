import useQuery from "./useQuery";

import { deleteOrderData } from "@/models/products";

async function deleteOrderDataHanlder(orderId) {
  const data = await deleteOrderData(orderId);

  return data;
}

export default function useDeleteOrderData(orderId) {
  return useQuery({
    queryFn: () => deleteOrderDataHanlder(orderId),
    enabled: false,
  });
}

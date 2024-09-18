import { useState, useEffect, useCallback } from "react";

export default function useQuery({ queryFn, enabled = true }) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchHandler = useCallback(async () => {
    setIsLoading(true);

    const fetchData = await queryFn();

    setData(fetchData);

    setIsLoading(false);

    return fetchData;
  }, [queryFn]);

  useEffect(() => {
    if (!enabled) {
      return;
    }

    fetchHandler();
  }, [fetchHandler, enabled]);

  return { isLoading, data, fetchHandler };
}

import { useState, useEffect, useCallback } from "react";

export default function useQuery({ queryFn, enabled = true }) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchHandler = async () => {
    setIsLoading(true);

    const fetchData = await queryFn();

    setData(fetchData);

    setIsLoading(false);

    return fetchData;
  };

  useEffect(() => {
    if (!enabled) {
      return;
    }

    fetchHandler();
  }, [enabled]);

  return { isLoading, data, fetchHandler };
}

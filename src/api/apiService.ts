import { useState, useEffect } from "react";

interface UseGetResponse<T> {
  loading: boolean;
  error: string | null;
  data: T | null;
}

export const useGet = <T = any>(url: string, params?: Record<string, any>): UseGetResponse<T> => {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<T | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        // Build URL + params (same behavior as axios GET)
        const finalUrl = new URL(url, window.location.origin);
        if (params) {
          Object.entries(params).forEach(([key, value]) => {
            if (value !== undefined && value !== null) {
              finalUrl.searchParams.set(key, String(value));
            }
          });
        }

        const response = await fetch(finalUrl.toString(), {
          method: "GET"
        });

        if (!response.ok) {
          throw new Error("Failed to fetch");
        }

        const json = await response.json();
        setData(json);

      } catch (err) {
        setError("Failed to fetch data");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url, JSON.stringify(params)]);

  return { loading, error, data };
};

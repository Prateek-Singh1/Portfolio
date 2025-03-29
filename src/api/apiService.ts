import { useState, useEffect } from "react";
import axios from "axios";

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
        const response = await axios({
          method: 'GET',
          url: url,
          params: params
        });
        setData(response.data);
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

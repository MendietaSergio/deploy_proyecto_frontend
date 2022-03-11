import { useEffect, useState } from "react";

const useApi = (url, options) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchApi = async (url, options) => {
    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error(response.text());
      }
      const data = await response.json();
      setData(data);
      setIsLoading(false);
    } catch (error) {
      setError(JSON.parse(error));
    }
  };

  useEffect(() => {
    fetchApi(url, options);
  }, []);

  return {
    response: data,
    error,
    isLoading,
  };
};

export default useApi;

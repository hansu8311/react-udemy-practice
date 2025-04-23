import { useCallback, useEffect, useState } from "react";

async function sendHttpRequest(url, config) {
  const response = await fetch(url, config);

  const resData = await response.json();

  if (!response.ok) {
    throw new Error(resData.message || "som error");
  }

  return resData;
}

function useHttp(url, config, initialData) {
  const [data, setData] = useState(initialData);
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(false);
  function clearData() {
    setIsLoading(false);
    setError(undefined);
    setData(initialData);
  }
  const sendRequest = useCallback(
    async function sendRequest(data) {
      const mergeConfig = {
        ...config,
      };
      setIsLoading(true);

      if (config.method !== "GET" && data) {
        mergeConfig.body = data;
      }
      try {
        const resData = await sendHttpRequest(url, mergeConfig);
        setData(resData);
      } catch (error) {
        setError(error.message || "Failed to fetch data.");
      }
      setIsLoading(false);
    },
    [url, config]
  );

  useEffect(() => {
    if ((config && config.method === "GET") || !config.method || !config)
      sendRequest();
  }, [sendRequest]);

  return { data, isLoading, error, sendRequest, clearData };
}

export default useHttp;

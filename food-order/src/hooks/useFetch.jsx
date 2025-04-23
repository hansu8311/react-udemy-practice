import { useEffect, useState } from "react";

//사용하는 곳마다 독립적 스냅샷을 생선한다.
export default function useFetch(fetchFn, initValue) {
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState();
  const [fetchedData, setFetchedData] = useState(initValue);

  useEffect(() => {
    async function fetchData() {
      setIsFetching(true);
      try {
        const data = await fetchFn();
        setFetchedData(data);
      } catch (error) {
        setError({
          message: error.message || "Failed to fetch data.",
        });
      }

      setIsFetching(false);
    }

    fetchData();
  }, [fetchFn]);

  return { fetchedData, setFetchedData, isFetching, error };
}

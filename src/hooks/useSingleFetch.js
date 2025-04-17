import { useState, useEffect } from "react";

function useSingleFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let ignore = false;

    const fetchData = async () => {
      try {
        const res = await fetch(url);
        if (!res.ok) throw new Error("Network response was not ok");
        const json = await res.json();
        if (!ignore) {
          setData(json);
          setError(null);
        }
      } catch (err) {
        if (!ignore) setError(err.message);
      } finally {
        if (!ignore) setLoading(false);
      }
    };

    fetchData();

    return () => {
      ignore = true; 
    };
  }, [url]);

  return { data, loading, error };
}

export default useSingleFetch;

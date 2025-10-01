import { useState, useEffect } from "react";

export function useFetch(url) {
  const [data, setData] = useState(null);      // dati recuperati
  const [loading, setLoading] = useState(true); // stato di caricamento
  const [error, setError] = useState(null);     // eventuale errore

  useEffect(() => {
    if (!url) return;

    let isMounted = true; // per evitare update se il componente è smontato

    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Errore HTTP: ${response.status}`);
        }
        const result = await response.json();
        if (isMounted) setData(result);
      } catch (err) {
        if (isMounted) setError(err.message);
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    fetchData();

    return () => {
      isMounted = false;
    };
  }, [url]);

  return { data, loading, error };
}


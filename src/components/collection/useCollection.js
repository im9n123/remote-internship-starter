import { useState, useEffect } from "react";
import axios from "axios";
import { useContext } from "react";
import { AppContext } from "../../context/AppContext";

export function useFetch(path, resetUI = false) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  const { setVisibleCount, setVisible } = useContext(AppContext);
  const baseUrl = "https://remote-internship-api-production.up.railway.app";

  async function fetchData() {
    try {
      setLoading(true);
      const { data } = await axios.get(`${baseUrl}${path}`);
      setData(data.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    setData(null);
    if (!path || path.includes("null") || path.includes("undefined")) {
      setLoading(false);
      return;
    }

    if (path) {
      fetchData();
      if (resetUI) {
        setVisibleCount(12);
        setVisible(true);
      }
    }
  }, [path, resetUI]);

  return { data, loading, setData };
}

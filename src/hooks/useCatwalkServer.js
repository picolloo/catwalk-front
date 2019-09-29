import axios from "axios";
import { useEffect, useState } from "react";

export default () => {
  const [markets, setMarkets] = useState([]);
  const [error, setError] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMarkets = async () => {
      const r = await axios.get(process.env.REACT_APP_CATWALK_SERVER);

      setMarkets(r.data);
    };

    try {
      setLoading(true);
      fetchMarkets();
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  return [error, loading, markets];
};

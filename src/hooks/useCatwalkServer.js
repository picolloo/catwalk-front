import axios from "axios";
import { useState, useEffect } from "react";

export default () => {
  const [markets, setMarkets] = useState([]);

  const fetchMarkets = async () => {
    const { data } = await axios.get(process.env.REACT_APP_CATWALK_SERVER);
    setMarkets(data);
  };

  useEffect(() => fetchMarkets(), []);

  const getMarket = async id => {
    const { data } = await axios.get(
      `${process.env.REACT_APP_CATWALK_SERVER}/${id}`
    );

    return data;
  };

  const removeMarket = async id => {
    await axios.delete(`${process.env.REACT_APP_CATWALK_SERVER}/${id}`);

    fetchMarkets();
  };

  const updateMarket = async id => {
    fetchMarkets();
  };

  const addMarket = async market => {
    await axios.post(`${process.env.REACT_APP_CATWALK_SERVER}`, market);

    fetchMarkets();
  };

  return {
    markets,
    getMarket,
    removeMarket,
    updateMarket,
    addMarket
  };
};

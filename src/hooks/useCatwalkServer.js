import axios from "axios";
import { useState, useEffect } from "react";

export default () => {
  const [markets, setMarkets] = useState([]);

  useEffect(() => {
    const fetchMarkets = async () => {
      const { data } = await axios.get(process.env.REACT_APP_CATWALK_SERVER);
      setMarkets(data);
    };

    fetchMarkets();
  }, []);

  const getMarket = async id => {
    const { data } = await axios.get(
      `${process.env.REACT_APP_CATWALK_SERVER}/${id}`
    );

    return data;
  };

  const removeMarket = async id => {};

  const updateMarket = async id => {};

  const addMarket = async market => {
    const newMarket = await axios.post(
      `${process.env.REACT_APP_CATWALK_SERVER}`,
      market
    );
  };

  return { markets, getMarket, removeMarket, updateMarket, addMarket };
};

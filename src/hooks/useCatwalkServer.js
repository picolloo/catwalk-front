import axios from "axios";

export default () => {
  const getMarkets = async () => {
    const { data } = await axios.get(process.env.REACT_APP_CATWALK_SERVER);
    return data;
  };

  const getMarket = async id => {
    const { data } = await axios.get(
      `${process.env.REACT_APP_CATWALK_SERVER}/${id}`
    );

    return data;
  };

  const removeMarket = async id => {
    await axios.delete(`${process.env.REACT_APP_CATWALK_SERVER}/${id}`);
  };

  const updateMarket = async id => {};

  const addMarket = async market => {
    await axios.post(`${process.env.REACT_APP_CATWALK_SERVER}`, market);
  };

  return {
    getMarkets,
    getMarket,
    removeMarket,
    updateMarket,
    addMarket
  };
};

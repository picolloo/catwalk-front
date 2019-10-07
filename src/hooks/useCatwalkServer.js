import axios from "axios";

export default () => {
  const api = axios.create({
    baseURL: process.env.REACT_APP_CATWALK_SERVER
  });

  const getMarkets = async () => {
    const { data } = await api.get();
    return data;
  };

  const getMarket = async id => {
    const { data } = await api.get(`/${id}`);

    return data;
  };

  const removeMarket = async id => {
    await api.delete(`/${id}`);
  };

  const updateMarket = async (id, market) => {
    await api.put(`/${id}`, market);
  };

  const addMarket = async market => {
    await api.post(`/`, market);
  };

  const uploadFile = async file => {
    const response = await api.post(`/upload`, file, {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    });

    return response.data;
  };

  return {
    getMarkets,
    getMarket,
    removeMarket,
    updateMarket,
    addMarket,
    uploadFile
  };
};

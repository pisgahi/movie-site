import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  headers: {
    Accept: "applications/json",
  },
  params: {
    api_key: "8e8f551f39cca6d30f1843deb889a296",
  },
});

export default api;

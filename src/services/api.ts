import axios from "axios";

const api = axios.create({
  baseURL: "https://happy-deploy-jpc0rrea.herokuapp.com/",
});

export default api;

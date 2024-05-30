import axios from "axios";

const api = axios.create({
  baseURL: "http://152.42.226.77:8080/",
});

export default api;

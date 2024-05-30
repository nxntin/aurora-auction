import axios from "axios";

const api = axios.create({
  baseURL: "http://aurora-auction.store/",
});

export default api;

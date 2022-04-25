import axios from "axios";

const api = axios.create({
  baseURL: "https://webilim.herokuapp.com/",
});

export default api;

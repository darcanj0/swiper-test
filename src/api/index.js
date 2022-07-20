import axios from "axios";

const api = axios.create({
  baseURL: "https://steam-project-server-development.up.railway.app/",
});

export default api;

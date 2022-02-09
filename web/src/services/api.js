import axios from "axios";
import https from "https";

const api = axios.create({
  httpsAgent: new https.Agent({
    rejectUnauthorized: false,
  }),
  baseURL:
    process.env.NODE_ENV === "development"
      ? "http://localhost:3333"
      : "",
});

export default api;

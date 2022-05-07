import axios from "axios";
import { addTokenInterceptor } from "../../shared/axios/addTokenInterceptor";
const instance = axios.create({
  baseURL: process.env.REACT_APP_URL_GRAPHQL,
  headers: {
    "Content-Type": "application/json",
  },
});

instance.interceptors.request.use(addTokenInterceptor);

export default instance;

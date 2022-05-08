import axios from "axios";
import { addTokenInterceptor } from "../../shared/axios/addTokenInterceptor";
import { refetchTokenExpired } from "@/shared/axios/refetchTokenExpired";

const instance = axios.create({
  baseURL: process.env.REACT_APP_URL_GRAPHQL,
  headers: {
    "Content-Type": "application/json",
  },
});

instance.interceptors.request.use(addTokenInterceptor);
instance.interceptors.response.use((response) => response, refetchTokenExpired);

export default instance;

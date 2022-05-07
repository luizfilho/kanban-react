import axios from "axios";

const instance = axios.create({
  baseURL: process.env.REACT_APP_URL_GRAPHQL,
});

// instance.interceptors.request.use(addTokenInterceptor)

export default instance;

import { AxiosRequestConfig } from "axios";
import { getToken } from "../utils/local-storage";

export async function addTokenInterceptor(configs: AxiosRequestConfig) {
  const token = await getToken();
  console.log("interceptor", token);
  let newConfigs = configs;

  if (token) {
    newConfigs = {
      ...configs,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
  }

  return newConfigs;
}

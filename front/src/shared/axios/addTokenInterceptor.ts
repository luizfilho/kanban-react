import { AxiosRequestConfig } from "axios";
import { useAuth } from "@/hooks/useAuth";
import { getToken } from "../utils/local-storage";

export async function addTokenInterceptor(configs: AxiosRequestConfig) {
  const token = await getToken();
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

export async function refetchTokenExpired(configs: AxiosRequestConfig) {
  try {
    // const token = await useAuth().refetchToken();
    // console.log({ token });
  } catch (error) {}
}

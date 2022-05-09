import { AxiosError } from "axios";
import AxiosApi from "@/services/instances/api";
import Variables from "@/config/variables";
import { LoginService } from "@/services/login";
import { setToken } from "@/shared/utils/local-storage";

let isOriginialRequest = false;

export async function refetchTokenExpired(error: AxiosError) {
  if (error.response?.status === 401 && !isOriginialRequest) {
    const originalRequest = error.config;
    console.log("error config", error.config);
    isOriginialRequest = true;
    const { data: newToken } = await LoginService.login({
      login: Variables.defaultUser ?? "",
      senha: Variables.defaultPassword ?? "",
    });
    setToken(newToken);

    return AxiosApi(originalRequest);
  }
  return Promise.reject(error);
}

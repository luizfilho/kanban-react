import { DtoLogin } from "./dtoLogin";
import Variables from "../../config/variables";
import AxiosApi from "../instances/api";
export class LoginService {
  static async login(data: DtoLogin) {
    console.log("CALL LOGIN");
    const url = `${Variables.urlApi}/login`;
    const response = await AxiosApi.post(url, data);

    return response;
  }
}

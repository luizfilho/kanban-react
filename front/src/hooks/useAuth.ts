import { useState } from "react";
import { LoginService } from "../services/login";
import { verifyToken, setToken } from "../shared/utils/local-storage";

const defaultUser = {
  login: "letscode",
  senha: "lets@123",
};

const useAuth = () => {
  const [loading, setLoading] = useState(false);

  const login = async () => {
    setLoading(true);
    try {
      const { data } = await LoginService.login(defaultUser);
      return data;
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  const refetchToken = async () => {
    try {
    } catch (error) {}
  };

  const initAuth = async () => {
    if (!verifyToken()) {
      const token = await login();
      setToken(token);
    }
  };

  return {
    login,
    loading,
    refetchToken,
    initAuth,
  };
};

export { useAuth };

import { useCallback, useState } from "react";
import { LoginService } from "../services/login";
import { verifyToken, setToken } from "../shared/utils/local-storage";

const defaultUser = {
  login: "luizfilho",
  senha: "senha123",
};

const useAuth = () => {
  const [loading, setLoading] = useState(false);
  const [checkingToken, setCheckingToken] = useState(true);

  const login = useCallback(async () => {
    setLoading(true);
    try {
      const { data } = await LoginService.login(defaultUser);
      return data;
    } catch (error) {
    } finally {
      setLoading(false);
    }
  }, []);

  const refetchToken = async () => {
    try {
      const token = await login();
      return token;
    } catch (error) {}
  };

  const initAuth = useCallback(async () => {
    if (!verifyToken()) {
      const token = await login();
      setToken(token);
      setCheckingToken(false);
    } else {
      setCheckingToken(false);
    }
  }, [login]);

  return {
    login,
    loading,
    refetchToken,
    initAuth,
    checkingToken,
  };
};

export { useAuth };

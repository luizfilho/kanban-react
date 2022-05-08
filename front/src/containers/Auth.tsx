import React, { ReactNode, useEffect } from "react";
import { useAuth } from "@/hooks/useAuth";

interface AuthProps {
  children: ReactNode;
}

const Auth = ({ children }: AuthProps) => {
  const { initAuth, checkingToken } = useAuth();

  useEffect(() => {
    initAuth();
  }, []);

  if (checkingToken) {
    return <div>Loading</div>;
  }
  return <div>{children}</div>;
};

export default Auth;

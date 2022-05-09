import React, { ReactNode, useEffect } from "react";
import { useAuth } from "@/hooks/useAuth";
import Lottie from "react-lottie";
import Delayed from "@/components/Layout/Delayed";
import loadingApp from "@/shared/lotties/loadingApp.json";

import * as S from "./styles";
interface AuthProps {
  children: ReactNode;
}

const Auth = ({ children }: AuthProps) => {
  const { initAuth, checkingToken } = useAuth();

  useEffect(() => {
    initAuth();
  }, [initAuth]);

  if (checkingToken) {
    return (
      <S.ContainerLoading>
        <Lottie
          width={500}
          height={500}
          options={{
            animationData: loadingApp,
          }}
        />
      </S.ContainerLoading>
    );
  }
  return (
    <>
      <Delayed
        waitBeforeShow={1500}
        componentDelayed={
          <S.ContainerLoading>
            <Lottie
              width={500}
              height={500}
              options={{
                animationData: loadingApp,
              }}
            />
          </S.ContainerLoading>
        }
      >
        {children}
      </Delayed>
    </>
  );
};

export default Auth;

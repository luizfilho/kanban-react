import React, { useState, useEffect, ReactNode } from "react";
type Props = {
  children: ReactNode;
  waitBeforeShow?: number;
  componentDelayed: ReactNode;
};

const Delayed = ({
  children,
  componentDelayed,
  waitBeforeShow = 500,
}: Props) => {
  const [isShown, setIsShown] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsShown(true);
    }, waitBeforeShow);
  }, [waitBeforeShow]);

  return isShown ? <>{children}</> : <> {componentDelayed}</>;
};

export default Delayed;

import React, { ReactNode } from "react";
import * as S from "./styles";
import { ButtonSize, Variant } from "./styles";
enum IconPosition {
  LEFT = "LEFT",
  RIGHT = "RIGHT",
}
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string | ReactNode;
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  icon?: ReactNode;
  iconPosition?: IconPosition;
  size?: ButtonSize;
  variant?: Variant;
}

const Button = ({
  text,
  onClick,
  icon,
  iconPosition = IconPosition.RIGHT,
  size = "normal",
  variant = "filled",
  ...props
}: ButtonProps) => {
  return (
    <S.Button onClick={onClick} {...props} size={size} variant={variant}>
      {iconPosition === IconPosition.LEFT && icon}
      <S.Text>{text}</S.Text>
      {iconPosition === IconPosition.RIGHT && icon}
    </S.Button>
  );
};

export default Button;

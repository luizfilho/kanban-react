import styled from "styled-components";
export type ButtonSize = "small" | "normal";
export type Variant = "text" | "filled";
export const Button = styled.button<{ size?: ButtonSize; variant?: Variant }>`
  outline: none;
  display: flex;
  align-items: center;
  border: none;
  border-radius: 36px;
  height: ${({ size }) => (size === "normal" ? "56px" : "28px")};
  padding: 8px 32px;
  background-color: ${({ theme, variant }) =>
    variant === "filled" ? theme.colors.DOING.background : "transparent"};
  cursor: pointer;
  svg {
    fill: ${({ theme }) => theme.colors.DOING.title};
    width: 24px;
    height: 24px;
    margin-left: 4px;
  }
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`;

export const Text = styled.p`
  font-size: 16px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.DOING.title};
`;

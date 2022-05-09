import React, { ReactNode } from "react";
import * as S from "./styles";
interface ModalProps {
  children: ReactNode;
  isOpen: boolean;
}
const Modal = ({ children, isOpen }: ModalProps) => {
  return (
    <>
      {isOpen && (
        <>
          <S.Modal isOpen={isOpen}>{children}</S.Modal>
        </>
      )}
    </>
  );
};

export default Modal;

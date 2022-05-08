import React from "react";
import * as S from "./styles";
import NewCard from "../NewCard";
interface NewCardModalProps {
  isOpen: boolean;
}
const NewCardModal = ({ isOpen }: NewCardModalProps) => {
  return (
    <>
      {isOpen ? (
        <S.Modal isOpen={isOpen}>
          <NewCard />
        </S.Modal>
      ) : null}
    </>
  );
};

export default NewCardModal;

import React from "react";
import * as S from "./styles";
import NewCard, { NewCardProps } from "../NewCard";

interface NewCardModalProps extends NewCardProps {
  isOpen: boolean;
}
const NewCardModal = ({
  isOpen,
  onSave,
  onCancel,
  saveLoading,
}: NewCardModalProps) => {
  return (
    <>
      {isOpen ? (
        <S.Modal isOpen={isOpen}>
          <NewCard
            onSave={onSave}
            onCancel={onCancel}
            saveLoading={saveLoading}
          />
        </S.Modal>
      ) : null}
    </>
  );
};

export default NewCardModal;

import React from "react";
import Modal from "@/components/Modal";
import CardDetails, { CardDetailsProps } from "../CardDetails";

interface NewCardModalProps extends CardDetailsProps {
  isOpen: boolean;
}
const NewCardModal = ({
  isOpen,
  onSave,
  onCancel,
  saveLoading,
  initialViewMode,
}: NewCardModalProps) => {
  return (
    <>
      <Modal isOpen={isOpen}>
        <CardDetails
          onSave={onSave}
          onCancel={onCancel}
          saveLoading={saveLoading}
        />
      </Modal>
    </>
  );
};

export default NewCardModal;

import React, { useState } from "react";
import * as S from "./styles";
import Button from "@/components/Button";
import ChipStatus from "../ChipStatus";
import { StatusCard, DtoCard } from "@/services/cards/dtoCards";
import { ClipLoader } from "react-spinners";
import Fade from "react-reveal/Fade";
import { useNotification } from "@/hooks/useNotification";

export interface NewCardProps {
  onCancel: () => void;
  onSave: (values: DtoCard) => void;
  saveLoading: boolean;
}
const chipsStatus = [StatusCard.TODO, StatusCard.DOING, StatusCard.DONE];
const NewCard = ({ onCancel, onSave, saveLoading }: NewCardProps) => {
  const notification = useNotification();
  const [selectedStatus, setSelectedStatus] = useState<StatusCard>(
    StatusCard.TODO
  );
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSelectedType = (newType: StatusCard) => {
    setSelectedStatus(newType);
  };

  const handleTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const handleContent = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(event.target.value);
  };
  const validateInfos = () => {
    let hasErrors = false;
    if (!title.trim().length) {
      notification.error("Adicione um título");
      hasErrors = true;
    }
    if (!content.trim().length) {
      notification.error("Adicione uma descrição");
      hasErrors = true;
    }
    return hasErrors;
  };
  const handleSave = () => {
    if (!validateInfos()) {
      onSave({ titulo: title, conteudo: content, lista: selectedStatus });
    }
  };
  return (
    <Fade left>
      <S.Container>
        <S.Title>New Task</S.Title>
        <input
          type="text"
          name="title"
          placeholder="Titulo"
          onChange={handleTitle}
          value={title}
          disabled={saveLoading}
        />
        <textarea
          placeholder="Uma breve descrição"
          rows={5}
          onChange={handleContent}
          value={content}
          disabled={saveLoading}
        ></textarea>
        <S.ContainerChips>
          {chipsStatus.map((status) => (
            <ChipStatus
              status={status}
              onClick={saveLoading ? () => null : handleSelectedType}
              selectedStatus={selectedStatus}
              key={status}
            />
          ))}
        </S.ContainerChips>
        <S.Controls>
          {saveLoading ? (
            <ClipLoader />
          ) : (
            <>
              <Button
                text="cancelar"
                onClick={() => onCancel()}
                size="small"
                variant="text"
              />
              <Button
                text="add task"
                onClick={() => handleSave()}
                size="small"
              />
            </>
          )}
        </S.Controls>
      </S.Container>
    </Fade>
  );
};

export default NewCard;

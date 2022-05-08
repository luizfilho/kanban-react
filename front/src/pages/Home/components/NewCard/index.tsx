import React, { useState } from "react";
import * as S from "./styles";
import Button from "@/components/Button";
import ChipStatus from "../ChipStatus";
import { StatusCard } from "@/services/cards/dtoCards";

export interface NewCardProps {
  onCancel?: () => void;
  onSave?: (values: {
    title: string;
    content: string;
    status: StatusCard;
  }) => void;
}
const chipsStatus = [StatusCard.TODO, StatusCard.DOING, StatusCard.DONE];
const NewCard = ({}: NewCardProps) => {
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
  return (
    <S.Container>
      <S.Title>New Task</S.Title>
      <input
        type="text"
        name="title"
        placeholder="Titulo"
        onChange={handleTitle}
        value={title}
      />
      <textarea
        placeholder="Uma breve descrição"
        rows={5}
        onChange={handleContent}
        value={content}
      ></textarea>
      <S.ContainerChips>
        {chipsStatus.map((status) => (
          <ChipStatus
            status={status}
            onClick={handleSelectedType}
            selectedStatus={selectedStatus}
          />
        ))}
      </S.ContainerChips>
      <S.Controls>
        <Button
          text="cancelar"
          onClick={() => console.log("onCancel")}
          size="small"
          variant="text"
        />
        <Button
          text="add task"
          onClick={() => console.log("onCancel")}
          size="small"
        />
      </S.Controls>
    </S.Container>
  );
};

export default NewCard;

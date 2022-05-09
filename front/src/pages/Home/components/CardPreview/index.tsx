import React from "react";
import MDEditor from "@uiw/react-md-editor";
import * as S from "./styles";
import { markDownStyles } from "./styles";
import { StatusCard } from "@/services/cards/dtoCards";

interface CardPreviewProps {
  title: string;
  content: string;
  status?: StatusCard;
}

const CardPreview = ({ title, content, status }: CardPreviewProps) => {
  return (
    <div>
      <S.ContainerTitle>
        <S.Title>{title}</S.Title>
        <S.ChipStatus status={status}>{status}</S.ChipStatus>
      </S.ContainerTitle>
      <S.Content>
        <MDEditor.Markdown
          style={markDownStyles}
          source={content}
          linkTarget="_blank"
        />
      </S.Content>
    </div>
  );
};

export default CardPreview;

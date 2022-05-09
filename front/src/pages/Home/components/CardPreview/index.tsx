import React from "react";
import MDEditor from "@uiw/react-md-editor";
import * as S from "./styles";
import { markDownStyles } from "./styles";

interface CardPreviewProps {
  title: string;
  content: string;
}

const CardPreview = ({ title, content }: CardPreviewProps) => {
  return (
    <div>
      <S.Title>{title}</S.Title>
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

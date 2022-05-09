import React from "react";
import MDEditor from "@uiw/react-md-editor";
import { StatusCard } from "@/services/cards/dtoCards";

interface CardFormProps {
  title: string;
  handleTitle: (value: string) => void;
  content: string;
  handleContent: (value: string) => void;
  handleCancel: () => void;
  status: StatusCard;
  loading: boolean;
}

const CardForm = ({
  title,
  handleTitle,
  handleContent,
  content,
  loading,
}: CardFormProps) => {
  return (
    <>
      <input
        type="text"
        name="title"
        placeholder="Titulo"
        onChange={(event) => handleTitle(event.target.value)}
        value={title}
        disabled={loading}
      />
      <MDEditor
        height={200}
        value={content}
        onChange={(value) => handleContent(value ?? "")}
        preview={"edit"}
        textareaProps={{
          draggable: false,
          rows: 2,
        }}
      />
    </>
  );
};

export default CardForm;

import React, { useState } from "react";

import Button from "@/components/Button";
import ChipStatus from "../ChipStatus";
import { StatusCard, DtoCard, DtoCards } from "@/services/cards/dtoCards";
import Fade from "react-reveal/Fade";
import { FiEdit2, FiEye } from "react-icons/fi";
import { useNotification } from "@/hooks/useNotification";
import CardPreview from "../CardPreview";
import CardForm from "../CardForm";
import { ClipLoader } from "react-spinners";
import { ViewMode } from "@/enums/ViewMode";
import * as S from "./styles";

export interface CardDetailsProps {
  onCancel: () => void;
  onSave?: (values: DtoCard) => void;
  onSaveEdit?: (values: DtoCards) => void;
  saveLoading: boolean;
  card?: DtoCards;
  editMode?: boolean;
  initialViewMode?: ViewMode;
}
const chipsStatus = [StatusCard.TODO, StatusCard.DOING, StatusCard.DONE];
const CardDetails = ({
  onCancel,
  onSave,
  saveLoading,
  card,
  onSaveEdit,
  editMode,
  initialViewMode = ViewMode.WRITE,
}: CardDetailsProps) => {
  const notification = useNotification();
  const [selectedStatus, setSelectedStatus] = useState<StatusCard>(
    card?.lista ?? StatusCard.TODO
  );
  const [viewMode, setViewMode] = useState<ViewMode>(initialViewMode);

  const [title, setTitle] = useState(card?.titulo ?? "");
  const [content, setContent] = useState(card?.conteudo ?? "");

  const handleViewMode = () => {
    setViewMode((currentViewMode) =>
      currentViewMode === ViewMode.PREVIEW ? ViewMode.WRITE : ViewMode.PREVIEW
    );
  };
  const handleSelectedType = (newType: StatusCard) => {
    setSelectedStatus(newType);
  };

  const handleTitle = (value: string) => {
    setTitle(value);
  };

  const handleContent = (value: string) => {
    setContent(value);
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
  const handleCancel = () => {
    setTitle("");
    setContent("");
    onCancel();
  };
  const handleSave = () => {
    if (!validateInfos()) {
      if (card?.id) {
        onSaveEdit &&
          onSaveEdit({
            titulo: title,
            conteudo: content,
            lista: selectedStatus,
            id: card.id,
          });
      } else {
        onSave &&
          onSave({ titulo: title, conteudo: content, lista: selectedStatus });
      }
    }
  };

  const saveButtonText = editMode ? "save" : "add task";
  return (
    <Fade left>
      <S.Container>
        {!editMode && <S.Title>New Task</S.Title>}
        <S.Tabs>
          <S.Tab
            selected={viewMode === ViewMode.WRITE}
            onClick={() => handleViewMode()}
          >
            <S.TabTitle>
              Write <FiEdit2 size={12} />
            </S.TabTitle>
          </S.Tab>
          <S.Tab
            selected={viewMode === ViewMode.PREVIEW}
            onClick={() => handleViewMode()}
          >
            <S.TabTitle>
              Preview <FiEye size={12} />
            </S.TabTitle>
          </S.Tab>
        </S.Tabs>
        {viewMode === ViewMode.WRITE && (
          <>
            <CardForm
              content={content}
              handleContent={handleContent}
              handleTitle={handleTitle}
              loading={saveLoading}
              status={selectedStatus}
              title={title}
              handleCancel={handleCancel}
            />
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
          </>
        )}
        {viewMode === ViewMode.PREVIEW && (
          <CardPreview
            title={title}
            content={content}
            status={selectedStatus}
          />
        )}

        <S.Controls>
          {saveLoading ? (
            <ClipLoader />
          ) : (
            <>
              <Button
                text="cancelar"
                onClick={() => handleCancel()}
                size="small"
                variant="text"
              />
              <Button
                text={saveButtonText}
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

export default CardDetails;

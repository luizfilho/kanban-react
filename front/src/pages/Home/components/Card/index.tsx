import React from "react";
import Fade from "react-reveal/Fade";
import MDEditor from "@uiw/react-md-editor";

import { FiArrowRightCircle, FiArrowLeftCircle, FiTrash } from "react-icons/fi";
import { MdModeEditOutline } from "react-icons/md";
import { StatusCard, DtoCards } from "@/services/cards/dtoCards";
import * as S from "./styles";

export interface CardProps {
  card: DtoCards;
  onDeleteCard: (cardId: string) => void;
  onChangeStatus: (card: DtoCards, newStatus: StatusCard) => void;
  onEditCard: (card: DtoCards, preview?: boolean) => void;
  onClickCard: (card: DtoCards, preview?: boolean) => void;
}

export const Card = ({
  card,
  onDeleteCard,
  onChangeStatus,
  onEditCard,
  onClickCard,
}: CardProps) => {
  const handleChangeStatusRight = () => {
    if (card.status === StatusCard.DOING) {
      onChangeStatus(card, StatusCard.DONE);
    } else {
      onChangeStatus(card, StatusCard.DOING);
    }
  };

  const handleChangeStatusLeft = () => {
    if (card.status === StatusCard.DOING) {
      return onChangeStatus(card, StatusCard.TODO);
    } else {
      return onChangeStatus(card, StatusCard.DOING);
    }
  };
  return (
    <Fade>
      <S.Container>
        <S.ContainerTitle>
          <S.Title>{card.title}</S.Title>
          <MdModeEditOutline size={16} onClick={() => onEditCard(card)} />
        </S.ContainerTitle>
        <S.ContainerContent onClick={() => onClickCard(card, true)}>
          <S.Content>
            <MDEditor.Markdown
              style={{ padding: "8px 0px" }}
              source={card.body}
              linkTarget="_blank"
            />
          </S.Content>
        </S.ContainerContent>
        <S.Controls>
          {card.status !== StatusCard.TODO ? (
            <FiArrowLeftCircle
              size={20}
              onClick={() => handleChangeStatusLeft()}
            />
          ) : (
            <div />
          )}
          <FiTrash size={20} onClick={() => onDeleteCard(card.id)} />
          {card.status !== StatusCard.DONE ? (
            <FiArrowRightCircle
              size={20}
              onClick={() => handleChangeStatusRight()}
            />
          ) : (
            <div />
          )}
        </S.Controls>
      </S.Container>
    </Fade>
  );
};

export default Card;

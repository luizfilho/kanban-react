import React from "react";
import { StatusCard, DtoCards } from "@/services/cards/dtoCards";
import Fade from "react-reveal/Fade";
import {
  FiEdit2,
  FiArrowRightCircle,
  FiArrowLeftCircle,
  FiTrash,
} from "react-icons/fi";
import * as S from "./styles";

export interface CardProps {
  card: DtoCards;
  onDeleteCard: (cardId: string) => void;
  onChangeStatus: (card: DtoCards, newStatus: StatusCard) => void;
}

export const Card = ({ card, onDeleteCard, onChangeStatus }: CardProps) => {
  const handleChangeStatusRight = () => {
    if (card.lista === StatusCard.DOING) {
      onChangeStatus(card, StatusCard.DONE);
    } else {
      onChangeStatus(card, StatusCard.DOING);
    }
  };

  const handleChangeStatusLeft = () => {
    if (card.lista === StatusCard.DOING) {
      return onChangeStatus(card, StatusCard.TODO);
    } else {
      return onChangeStatus(card, StatusCard.DOING);
    }
  };
  return (
    <Fade>
      <S.Container>
        <S.ContainerTitle>
          <S.Title>{card.titulo}</S.Title>
          <FiEdit2 size={16} />
        </S.ContainerTitle>
        <S.Content>{card.conteudo}</S.Content>
        <S.Controls>
          {card.lista !== StatusCard.TODO ? (
            <FiArrowLeftCircle
              size={20}
              onClick={() => handleChangeStatusLeft()}
            />
          ) : (
            <div />
          )}
          <FiTrash size={20} onClick={() => onDeleteCard(card.id)} />
          {card.lista !== StatusCard.DONE ? (
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

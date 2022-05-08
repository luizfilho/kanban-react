import React from "react";
import { StatusCard, DtoCards } from "@/services/cards/dtoCards";
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
  // righ && in progress => done
  // righ && in todo => inpprogess
  //left && in progress => todo
  // left && done => inprogress

  //

  const handleChangeStatus = (direction: "left" | "right") => {
    if (direction === "right" && card.lista === StatusCard.DOING) {
      console.log("here");
      return onChangeStatus(card, StatusCard.DONE);
    } else {
      onChangeStatus(card, StatusCard.DOING);
    }
    if (direction === "left" && card.lista === StatusCard.DOING) {
      return onChangeStatus(card, StatusCard.TODO);
    } else {
      return onChangeStatus(card, StatusCard.DOING);
    }
  };
  return (
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
            onClick={() => handleChangeStatus("left")}
          />
        ) : (
          <div />
        )}
        <FiTrash size={20} onClick={() => onDeleteCard(card.id)} />
        {card.lista !== StatusCard.DONE ? (
          <FiArrowRightCircle
            size={20}
            onClick={() => handleChangeStatus("right")}
          />
        ) : (
          <div />
        )}
      </S.Controls>
    </S.Container>
  );
};

export default Card;

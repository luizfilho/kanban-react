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
}

export const Card = ({ card, onDeleteCard }: CardProps) => {
  return (
    <S.Container>
      <S.ContainerTitle>
        <S.Title>{card.titulo}</S.Title>
        <FiEdit2 size={16} />
      </S.ContainerTitle>
      <S.Content>{card.conteudo}</S.Content>
      <S.Controls>
        {card.lista !== StatusCard.TODO ? (
          <FiArrowLeftCircle size={20} />
        ) : (
          <div />
        )}
        <FiTrash size={20} onClick={() => onDeleteCard(card.id)} />
        {card.lista !== StatusCard.DONE ? (
          <FiArrowRightCircle size={20} />
        ) : (
          <div />
        )}
      </S.Controls>
    </S.Container>
  );
};

export default Card;

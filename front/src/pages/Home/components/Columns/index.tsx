import React from "react";
import { DtoCards, StatusCard } from "@/services/cards/dtoCards";
import Card, { CardProps } from "../Card";
import * as S from "./styles";

interface CollumnsProps extends Omit<CardProps, "card"> {
  cards?: DtoCards[];
}
const allColumns = [
  { status: StatusCard.TODO, title: "To do" },
  { status: StatusCard.DOING, title: "In progress" },
  { status: StatusCard.DONE, title: "Done" },
];
const Columns = ({ cards, onDeleteCard }: CollumnsProps) => {
  const getCardsByType = (status: StatusCard) => {
    return cards
      ?.filter((card) => card.lista === status)
      .map((card) => (
        <Card key={card.id} card={card} onDeleteCard={onDeleteCard} />
      ));
  };

  return (
    <S.Container>
      {allColumns.map(({ status, title }) => (
        <S.Column status={status} key={status}>
          <>
            <S.TitleColumn status={status}>{title}</S.TitleColumn>
            <S.CollumContent>{getCardsByType(status)}</S.CollumContent>
          </>
        </S.Column>
      ))}
    </S.Container>
  );
};

export default Columns;

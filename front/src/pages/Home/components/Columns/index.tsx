import React from "react";
import * as S from "./styles";
import { DtoCards, StatusCard } from "@/services/cards/dtoCards";
import Card from "../Card";

interface CollumnsProps {
  cards?: DtoCards[];
}
const allColumns = [
  { status: StatusCard.TODO, title: "To do" },
  { status: StatusCard.DOING, title: "In progress" },
  { status: StatusCard.DONE, title: "Done" },
];
const Columns = ({ cards }: CollumnsProps) => {
  const getCardsByType = (status: StatusCard) => {
    return cards
      ?.filter((card) => card.lista === status)
      .map((card) => <Card key={card.id} card={card} />);
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

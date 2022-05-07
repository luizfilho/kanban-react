import React from "react";
import * as S from "./styles";
import { DtoCards, CardsType } from "@/services/cards/dtoCards";
import Card from "../Card";

interface CollumnsProps {
  cards: DtoCards[];
}
const allColumns = [
  { type: CardsType.TODO, title: "To do" },
  { type: CardsType.DOING, title: "In progress" },
  { type: CardsType.DONE, title: "Done" },
];
const Columns = ({ cards }: CollumnsProps) => {
  const getCardsByType = (type: CardsType) => {
    return cards
      .filter((card) => card.lista === type)
      .map((card) => <Card key={card.id} card={card} />);
  };
  console.log({ cards });
  return (
    <S.Container>
      {allColumns.map(({ type, title }) => (
        <S.Column type={type} key={type}>
          <>
            <S.TitleColumn type={type}>{title}</S.TitleColumn>
            {getCardsByType(type)}
          </>
        </S.Column>
      ))}
    </S.Container>
  );
};

export default Columns;

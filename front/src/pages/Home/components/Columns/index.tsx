import React from "react";
import * as S from "./styles";
import { ColumnTypes } from "./styles";

const allColumns = [
  { type: ColumnTypes.TODO, title: "To do" },
  { type: ColumnTypes.DOING, title: "In progress" },
  { type: ColumnTypes.DONE, title: "Done" },
];
const Columns = () => {
  return (
    <S.Container>
      {allColumns.map(({ type, title }) => (
        <S.Column type={type}>
          <S.TitleColumn type={type}>{title}</S.TitleColumn>
        </S.Column>
      ))}
    </S.Container>
  );
};

export default Columns;

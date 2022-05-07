import styled from "styled-components";

export enum ColumnTypes {
  TODO = "TODO",
  DOING = "DOING",
  DONE = "DONE",
}

export const Container = styled.div`
  display: grid;

  grid-template-columns: 25% 25% 25%;
  grid-gap: 24px;
  justify-content: center;
  margin-top: 24px;
`;

export const Column = styled.div<{ type: ColumnTypes }>`
  height: 400px;
  background-color: ${({ theme, type }) => theme.colors[type].background};

  border-radius: 32px;
`;

export const TitleColumn = styled.h3<{ type: ColumnTypes }>`
  margin: 0px;
  color: ${({ theme, type }) => theme.colors[type].title};
  margin: 24px;
`;

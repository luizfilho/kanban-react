import styled from "styled-components";
import { StatusCard } from "@/services/cards/dtoCards";

export const Container = styled.div`
  display: grid;

  grid-template-columns: 25% 25% 25%;
  grid-gap: 24px;
  justify-content: center;
  margin-top: 24px;
`;

export const Column = styled.div<{ status: StatusCard }>`
  height: auto;
  background-color: ${({ theme, status }) => theme.colors[status].background};

  border-radius: 32px;
`;

export const TitleColumn = styled.h3<{ status: StatusCard }>`
  margin: 0px;
  color: ${({ theme, status }) => theme.colors[status].title};
  margin: 24px;
`;

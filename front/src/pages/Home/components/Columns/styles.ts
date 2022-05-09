import styled from "styled-components";
import { StatusCard } from "@/services/cards/dtoCards";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 30% 30% 30%;
  grid-gap: 24px;
  justify-content: center;
  margin-top: 24px;
`;

export const Column = styled.div<{ status: StatusCard }>`
  height: auto;
  background-color: ${({ theme, status }) => theme.colors[status].background};
  border-radius: 32px;
  min-height: 80vh;
  max-height: 80vh;
`;

export const TitleColumn = styled.h3<{ status: StatusCard }>`
  margin: 0px;
  color: ${({ theme, status }) => theme.colors[status].title};
  margin: 24px;
`;

export const CollumContent = styled.div`
  overflow: auto;
  max-height: 85%;
`;

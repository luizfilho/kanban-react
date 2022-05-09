import { StatusCard } from "@/services/cards/dtoCards";
import styled from "styled-components";

export const markDownStyles = {
  padding: 8,
  borderRadius: 8,
  maxHeight: 400,
  overflow: "auto",
};
export const Title = styled.h2`
  margin: 0px;
`;

export const Content = styled.div`
  border: 1px solid #ccc;
  border-radius: 8px;
  margin: 16px 0px;
`;

export const ChipStatus = styled.div<{ status?: StatusCard }>`
  color: ${({ theme, status }) => theme.colors[status ?? ""].title};
  background-color: ${({ theme, status }) =>
    theme.colors[status ?? ""].background};
  padding: 8px;
  border-radius: 8px;
  font-weight: 600;
`;

export const ContainerTitle = styled.div`
  display: flex;
  justify-content: space-between;
`;

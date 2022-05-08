import { StatusCard } from "@/services/cards/dtoCards";
import styled from "styled-components";

export const Container = styled.div<{
  status: StatusCard;
  selectedStatus: StatusCard;
}>`
  cursor: pointer;
  padding: 8px;
  width: fit-content;
  border-bottom: 2px solid
    ${({ theme, status, selectedStatus }) =>
      selectedStatus === status ? theme.colors[status].title : "tranparent"};
`;

export const Title = styled.p<{
  status: StatusCard;
}>`
  color: ${({ theme, status }) => theme.colors[status].title};
  margin: 0px;
  font-weight: 600;
`;

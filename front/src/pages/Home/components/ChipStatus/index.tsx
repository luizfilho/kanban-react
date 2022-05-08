import { StatusCard } from "@/services/cards/dtoCards";
import React from "react";
import * as S from "./styles";

interface ChipStatusProps {
  status: StatusCard;
  onClick: (newType: StatusCard) => void;
  selectedStatus: StatusCard;
}
const ChipStatus = ({ status, onClick, selectedStatus }: ChipStatusProps) => {
  return (
    <S.Container
      status={status}
      onClick={(e) => onClick(status)}
      selectedStatus={selectedStatus}
    >
      <S.Title status={status}>{status}</S.Title>
    </S.Container>
  );
};

export default ChipStatus;

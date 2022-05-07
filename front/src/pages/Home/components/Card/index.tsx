import React from "react";
import { DtoCards } from "@/services/cards/dtoCards";

interface CardProps {
  card: DtoCards;
}

export const Card = ({ card }: CardProps) => {
  return (
    <div>
      {card.titulo}
      {card.conteudo}
    </div>
  );
};

export default Card;

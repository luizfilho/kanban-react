import { useState, useCallback, useEffect } from "react";
import { DtoCard, DtoCards } from "@/services/cards/dtoCards";
import { useCardsService } from "../useCardsService";

interface UseCardProps {
  handleModal: () => void;
}

const useCards = ({ handleModal }: UseCardProps) => {
  const [cards, setCards] = useState<DtoCards[]>([]);
  const { loading, createNewCard, getCards: getAllCards } = useCardsService();

  const handleSaveNewCard = async (newCard: DtoCard) => {
    try {
      await createNewCard(newCard);
      getCards();
      handleModal();
    } catch (error) {}
  };

  const getCards = useCallback(async () => {
    try {
      const data = await getAllCards();
      setCards(data ?? []);
    } catch (error) {
    } finally {
    }
  }, []);

  useEffect(() => {
    getCards();
  }, []);

  return {
    handleSaveNewCard,
    cards,
    loading,
  };
};

export { useCards };

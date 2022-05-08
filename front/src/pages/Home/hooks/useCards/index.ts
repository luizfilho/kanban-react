import { useState, useCallback, useEffect } from "react";
import { DtoCard, DtoCards, StatusCard } from "@/services/cards/dtoCards";
import { useCardsService } from "../useCardsService";

interface UseCardProps {
  handleModal: () => void;
}

const useCards = ({ handleModal }: UseCardProps) => {
  const [cards, setCards] = useState<DtoCards[] | []>([]);
  const {
    loading,
    createNewCard,
    getCards: getAllCards,
    removeCard,
    updateCard,
  } = useCardsService();

  const handleSaveNewCard = async (newCard: DtoCard) => {
    await createNewCard(newCard);
    getCards();
    handleModal();
  };

  const handleDeleteCard = async (cardId: string) => {
    try {
      await removeCard(cardId);
      const newCards = cards.filter((card) => card.id !== cardId);
      setCards(newCards);
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

  const handleStatusCard = async (card: DtoCards, newStatus: StatusCard) => {
    try {
      const newCard: DtoCards = {
        ...card,
        lista: newStatus,
      };

      console.log({ newCard, newStatus });
      const data = await updateCard(newCard);

      const newCards = cards.map((currentCard) =>
        currentCard.id === newCard.id
          ? {
              ...currentCard,
              lista: newStatus,
            }
          : currentCard
      );
      setCards(newCards);
      console.log(data);
    } catch (error) {}
  };

  useEffect(() => {
    getCards();
  }, []);

  return {
    handleSaveNewCard,
    cards,
    loading,
    handleDeleteCard,
    handleStatusCard,
  };
};

export { useCards };

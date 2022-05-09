import { useState, useCallback, useEffect } from "react";
import { DtoCard, DtoCards, StatusCard } from "@/services/cards/dtoCards";
import { useCardsService } from "../useCardsService";
import { useNotification } from "@/hooks/useNotification";

interface UseCardProps {
  handleModal: () => void;
  isOpenModal: boolean;
}

const useCards = ({ handleModal, isOpenModal }: UseCardProps) => {
  const [cards, setCards] = useState<DtoCards[] | []>([]);
  const {
    loading,
    createNewCard,
    getCards: getAllCards,
    removeCard,
    updateCard,
  } = useCardsService();

  const notification = useNotification();

  const handleSaveNewCard = async (newCard: DtoCard) => {
    try {
      await createNewCard(newCard);
      getCards();
      handleModal();
      notification.success("Card criado!");
    } catch (error) {
      notification.error("Erro ao criar o card");
    }
  };

  const handleDeleteCard = async (cardId: string) => {
    try {
      await removeCard(cardId);
      const newCards = cards.filter((card) => card.id !== cardId);
      setCards(newCards);
      notification.success("Card removido!");
    } catch (error) {
      notification.error("Erro ao remover o card =(");
    }
  };

  const getCards = useCallback(async () => {
    try {
      const data = await getAllCards();
      setCards(data ?? []);
      return data;
    } catch (error) {
      notification.error("Erro ao buscar os cards =(");
    }
  }, [getAllCards, notification]);

  const handleStatusCard = async (card: DtoCards, newStatus: StatusCard) => {
    try {
      const newCard: DtoCards = {
        ...card,
        lista: newStatus,
      };

      await updateCard(newCard);

      const newCards = cards.map((currentCard) =>
        currentCard.id === newCard.id
          ? {
              ...currentCard,
              lista: newStatus,
            }
          : currentCard
      );
      setCards(newCards);
    } catch (error) {}
  };

  const handleUpdateCard = async (cardUpdated: DtoCards) => {
    try {
      await updateCard(cardUpdated);
      const newCards = cards.map((currentCard) =>
        currentCard.id === cardUpdated.id ? cardUpdated : currentCard
      );
      setCards(newCards);
      isOpenModal && handleModal();
      notification.success("Card atualizado!");
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
    handleUpdateCard,
  };
};

export { useCards };

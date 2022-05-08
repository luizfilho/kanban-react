import { useState, useCallback, useEffect } from "react";
import { CardsService } from "@/services/cards";
import { DtoCards, DtoCard } from "@/services/cards/dtoCards";

const useCardsService = () => {
  const [loading, setLoading] = useState(false);

  const createNewCard = useCallback(async (newCard: Omit<DtoCards, "id">) => {
    setLoading(true);
    try {
      const { data } = await CardsService.createCard(newCard);
      return data;
    } catch (error) {
    } finally {
      setLoading(false);
    }
  }, []);

  const getCards = useCallback(async () => {
    setLoading(true);
    try {
      const { data } = await CardsService.getCards();
      return data;
    } catch (error) {
    } finally {
      setLoading(false);
    }
  }, []);

  const removeCard = useCallback(async (cardId: string) => {
    setLoading(true);
    try {
      const { data } = await CardsService.removeCard(cardId);
      return data;
    } catch (error) {
    } finally {
      setLoading(false);
    }
  }, []);

  const updateCard = useCallback(async (card: DtoCards) => {
    setLoading(true);
    try {
      const { data } = await CardsService.updateCard(card);
      return data;
    } catch (error) {
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    loading,
    createNewCard,
    getCards,
    removeCard,
    updateCard,
  };
};

export { useCardsService };

import { useState, useCallback, useEffect } from "react";
import { CardsService } from "@/services/cards";
import { DtoCards } from "@/services/cards/dtoCards";

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

  return {
    loading,
    createNewCard,
    getCards,
  };
};

export { useCardsService };

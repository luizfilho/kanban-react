import { useState, useCallback, useEffect } from "react";
import { CardsService } from "@/services/cards";

const useCardsService = () => {
  const [cards, setCards] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const load = useCallback(async () => {
    setLoading(true);
    try {
      const { data } = await CardsService.getCards();
      setCards(data);
    } catch (error) {
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    load();
  }, []);

  return {
    cards,
    loading,
  };
};

export { useCardsService };

import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { CardsService } from "@/services/cards";
import { DtoCardsResponse } from "@/services/cards/dtoCardsResponse";
import { useNotification } from "@/hooks/useNotification";
import { DtoCards, StatusCard } from "@/services/cards/dtoCards";
import { useCallback } from "react";

interface UseCardProps {
  handleModal: () => void;
  isOpenModal: boolean;
}

export function useCardsReactQuery({ handleModal, isOpenModal }: UseCardProps) {
  const queryClient = useQueryClient();
  const notification = useNotification();

  const updateQueryCards = useCallback((newCards: DtoCardsResponse) => {
    queryClient.setQueryData<DtoCardsResponse>(["cards"], newCards);
  }, [queryClient]);

  const { isLoading, data: cards } = useQuery<DtoCardsResponse>(["cards"], {
    queryFn: () => CardsService.getCards(),
  });
  const { mutate: createCard } = useMutation(CardsService.createCard, {
    onSuccess: () => {
      handleModal();
      queryClient.refetchQueries(["cards"]);
      notification.success("Card criado!");
    },
    onError: () => {
      notification.error("deu ruim!");
    },
  });

  const { mutate: removeCard } = useMutation(CardsService.removeCard, {
    onSuccess: (_, variables) => {
      const cardId = variables;

      const newCards = cards?.filter((card) => card.id !== cardId);
      updateQueryCards(newCards!);
    },
    onError: () => {},
  });

  const { mutate: _updateCard } = useMutation(CardsService.updateCard);

  const updateStatusCard = async (card: DtoCards, newStatus: StatusCard) => {
    const newCard: DtoCards = {
      ...card,
      status: newStatus,
    };
    _updateCard(newCard);

    // outra forma de se utilizar.
    // updateCard(newCard,{
    //   onSuccess:() => {
    //     // deu bom!
    //   },
    //   onError:() => {
    //     // deu ruim!
    //   }
    // })
    const newCards = cards?.map((card) => {
      if (card.id === newCard.id) return newCard;
      return card;
    });

    updateQueryCards(newCards!);
  };

  const updateCard = useCallback(
    (cardUpdated: DtoCards) => {
      _updateCard(cardUpdated, {
        onSuccess: () => {
          isOpenModal && handleModal();
          notification.success("Card atualizado!");
        },
      });
      const newCards = cards?.map((currentCard) =>
        currentCard.id === cardUpdated.id ? cardUpdated : currentCard
      );
      updateQueryCards(newCards!);
    },
    [
      _updateCard,
      cards,
      handleModal,
      isOpenModal,
      notification,
      updateQueryCards,
    ]
  );
  return {
    loading: isLoading,
   cards,
    createCard,
    removeCard,
    updateStatusCard,
    updateCard,
  };
}

import React, { useState } from "react";
import Button from "@/components/Button";
import Columns from "./components/Columns";
import { AiOutlinePlus } from "react-icons/ai";
// import { useCards } from "./hooks/useCards";
import NewCardModal from "./components/NewCardModal";
import EditCardModal from "./components/EditCardModal";

import { DtoCards } from "@/services/cards/dtoCards";
import * as S from "./styles";
import { ViewMode } from "@/enums/ViewMode";
import { useCardsReactQuery } from "./hooks/useCards/useCardsReactQuery";

const Home = () => {
  const [isOpenModalNewCard, setIsOpenModalNewCard] = useState(false);
  const [isOpenModalEditCard, setIsOpenModalEditCard] = useState(false);
  const [cardSelected, setCardSelected] = useState<DtoCards>();
  const [initialViewMode, setInitialMode] = useState<ViewMode>(ViewMode.WRITE);
  const handleIsOpenModalNewCard = () => {
    setInitialMode(ViewMode.WRITE);
    setIsOpenModalNewCard(!isOpenModalNewCard);
  };
  const handleIsOpenModalEditCard = () => {
    setIsOpenModalEditCard(!isOpenModalEditCard);
  };

  const handleSelectedCard = (card: DtoCards, preview?: boolean) => {
    preview ? setInitialMode(ViewMode.PREVIEW) : setInitialMode(ViewMode.WRITE);
    setCardSelected(card);
    handleIsOpenModalEditCard();
  };
  const {
    loading,
    cards,
    createCard,
    removeCard,
    updateStatusCard,
    updateCard
  } = useCardsReactQuery({
    isOpenModal: isOpenModalNewCard || isOpenModalEditCard,
    handleModal: isOpenModalNewCard
      ? handleIsOpenModalNewCard
      : handleIsOpenModalEditCard,
  });

  return (
    <S.Container>
      <NewCardModal
        isOpen={isOpenModalNewCard}
        onSave={createCard}
        onCancel={handleIsOpenModalNewCard}
        saveLoading={loading}
      />

      <EditCardModal
        isOpen={isOpenModalEditCard}
        onCancel={handleIsOpenModalEditCard}
        saveLoading={loading}
        onSaveEdit={updateCard}
        card={cardSelected}
        initialViewMode={initialViewMode}
      />

      <S.ContainerAddTask>
        <Button
          text="Add Task"
          onClick={() => handleIsOpenModalNewCard()}
          icon={<AiOutlinePlus />}
        />
      </S.ContainerAddTask>
      <Columns
        cards={cards}
        onDeleteCard={(cardId) => removeCard(cardId)}
        onChangeStatus={updateStatusCard}
        onEditCard={handleSelectedCard}
        onClickCard={handleSelectedCard}
      />
    </S.Container>
  );
};

export default Home;

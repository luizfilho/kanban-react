import React, { useState } from "react";
import Button from "@/components/Button";
import Columns from "./components/Columns";
import { AiOutlinePlus } from "react-icons/ai";
import { useCards } from "./hooks/useCards";
import NewCardModal from "./components/NewCardModal";
import EditCardModal from "./components/EditCardModal";

import { DtoCards } from "@/services/cards/dtoCards";
import * as S from "./styles";
import { ViewMode } from "@/enums/ViewMode";

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
    cards,
    loading,
    handleSaveNewCard,
    handleDeleteCard,
    handleStatusCard,
    handleUpdateCard,
  } = useCards({
    isOpenModal: isOpenModalNewCard || isOpenModalEditCard,
    handleModal: isOpenModalNewCard
      ? handleIsOpenModalNewCard
      : handleIsOpenModalEditCard,
  });
  return (
    <S.Container>
      <NewCardModal
        isOpen={isOpenModalNewCard}
        onSave={handleSaveNewCard}
        onCancel={handleIsOpenModalNewCard}
        saveLoading={loading}
      />

      <EditCardModal
        isOpen={isOpenModalEditCard}
        onCancel={handleIsOpenModalEditCard}
        saveLoading={loading}
        onSaveEdit={handleUpdateCard}
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
        onDeleteCard={handleDeleteCard}
        onChangeStatus={handleStatusCard}
        onEditCard={handleSelectedCard}
        onClickCard={handleSelectedCard}
      />
    </S.Container>
  );
};

export default Home;

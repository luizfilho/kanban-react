import React, { useState } from "react";
import Button from "@/components/Button";
import Columns from "./components/Columns";
import { AiOutlinePlus } from "react-icons/ai";
import { useCardsService } from "./hooks/useCardsService";
import { useCards } from "./hooks/useCards";
import NewCardModal from "./components/NewCardModal";
import { toast } from "react-toastify";

import * as S from "./styles";

const Home = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const handleModal = () => {
    setIsOpenModal(!isOpenModal);
  };
  const {
    loading,
    handleSaveNewCard,
    handleDeleteCard,
    cards,
    handleStatusCard,
  } = useCards({
    handleModal,
  });

  return (
    <S.Container>
      <NewCardModal
        isOpen={isOpenModal}
        onSave={handleSaveNewCard}
        onCancel={handleModal}
        saveLoading={loading}
      />
      <S.ContainerAddTask>
        <Button
          text="Add Task"
          onClick={() => handleModal()}
          icon={<AiOutlinePlus />}
        />
      </S.ContainerAddTask>
      <Columns
        cards={cards}
        onDeleteCard={handleDeleteCard}
        onChangeStatus={handleStatusCard}
      />
    </S.Container>
  );
};

export default Home;

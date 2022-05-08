import React, { useState } from "react";
import Button from "@/components/Button";
import Columns from "./components/Columns";
import { AiOutlinePlus } from "react-icons/ai";
import { useCardsService } from "./hooks/useCardsService";
import { useCards } from "./hooks/useCards";
import NewCardModal from "./components/NewCardModal";

import * as S from "./styles";

const Home = () => {
  const handleModal = () => {
    setIsOpenModal(!isOpenModal);
  };
  const { loading, handleSaveNewCard, cards } = useCards({ handleModal });

  const [isOpenModal, setIsOpenModal] = useState(false);
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
      <Columns cards={cards} />
    </S.Container>
  );
};

export default Home;

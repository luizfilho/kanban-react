import React, { useState } from "react";
import Button from "@/components/Button";
import Columns from "./components/Columns";
import Card from "./components/Card";
import { AiOutlinePlus } from "react-icons/ai";
import { useCardsService } from "./hooks/useCardsService";
import NewCardModal from "./components/NewCardModal";
import * as S from "./styles";

const Home = () => {
  const { cards, loading: loadingCards } = useCardsService();
  const [isOpenModal, setIsOpenModal] = useState(false);
  const handleModal = () => {
    setIsOpenModal(!isOpenModal);
  };
  return (
    <S.Container>
      <NewCardModal isOpen={isOpenModal} />
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

import React from "react";
import Columns from "./components/Columns";
import { useCardsService } from "./hooks/useCardsService";

const Home = () => {
  const { cards } = useCardsService();
  // console.log({ cards });
  return (
    <div>
      <Columns cards={cards} />
    </div>
  );
};

export default Home;

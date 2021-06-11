import React from "react";
import Card from "./card/Card";
import { cards } from "./data";
import { Wrapper } from "./styles";

const CardList = ({ filteredCards }) => {
  return (
    <Wrapper>
      {filteredCards.map((card) => {
        return <Card key={card._id} data={card} />;
      })}
    </Wrapper>
  );
};

export default CardList;

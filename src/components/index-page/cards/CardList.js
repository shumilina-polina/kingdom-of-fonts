import React from "react";
import Card from "./card/Card";
import { Wrapper } from "./styles";

const CardList = ({ cards }) => {
  return (
      <Wrapper>
        {cards.map((card) => {
          return <Card key={card.id} data={card} />;
        })}
      </Wrapper>

  );
};

export default CardList;

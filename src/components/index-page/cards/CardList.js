import React from "react";
import Card from "./card/Card";
// import { cards } from "./data";
import { Wrapper } from "./styles";

const CardList = ({ cards }) => {
  return (
      <Wrapper>
        {cards.map((card, idx) => {
          return <Card key={idx} data={card.node} />;
        })}
      </Wrapper>

  );
};

export default CardList;

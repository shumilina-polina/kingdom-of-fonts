import React from "react";
import CardList from "../components/index-page/cards/CardList";
import CategoriesFilter from "../components/index-page/filters/categories/CategoriesFilter";
import { StickyWrapper } from "../components/index-page/filters/styles";
import { Container } from "../global";
import ScrollButtons from "../components/index-page/scroll-buttons/ScrollButtons";

const IndexPageNoFiltersView = ({ cards }) => {
  return (
    <>
      <StickyWrapper>
        <CategoriesFilter />
      </StickyWrapper>
      {/* <div style={{height: "40px"}}></div> */}
      <Container withMargin>
        <CardList cards={cards} />
      </Container>
      <ScrollButtons />
    </>
  );
};

export default IndexPageNoFiltersView;

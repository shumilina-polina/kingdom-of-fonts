import React from "react";
// import styled from "styled-component";
import CardList from "../components/index-page/cards/CardList";
import CategoriesFilter from "../components/index-page/filters/categories/CategoriesFilter";
import { StickyWrapper } from "../components/index-page/filters/styles";
import { Container } from "../global";

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
    </>
  );
};

export default IndexPageNoFiltersView;

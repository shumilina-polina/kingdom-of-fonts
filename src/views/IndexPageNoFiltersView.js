import React from "react";
// import styled from "styled-component";
import CardList from "../components/index-page/cards/CardList";
import CategoriesFilter from "../components/index-page/filters/categories/CategoriesFilter";
import { Container } from "../global";

const IndexPageNoFiltersView = ({ cards, setFilters }) => {
  return (
    <>
      <CategoriesFilter
        setFilters={setFilters}
      />
      <div style={{height: "40px"}}></div>
      <Container>
        <CardList cards={cards} />
      </Container>
      
    </>
  );
};

export default IndexPageNoFiltersView;

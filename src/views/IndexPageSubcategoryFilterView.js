import React from "react";
import CardList from "../components/index-page/cards/CardList";
import CategoriesFilter from "../components/index-page/filters/categories/CategoriesFilter";
import SubcategoriesFilter from "../components/index-page/filters/subcategories/SubcategoriesFilter";
import { Container } from "../global";


const IndexPageSubcategoryFilterView = ({
  cards,
  setFilters,
}) => {

  console.log("FFF", cards)
  return (
    <>
      <CategoriesFilter setFilters={setFilters} />
      <SubcategoriesFilter setFilters={setFilters} />
      <Container>
        <CardList cards={cards.reverse()} />
      </Container>
      
    </>
  );
};

export default IndexPageSubcategoryFilterView;


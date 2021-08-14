import React, {useState} from "react";
import CardList from "../components/index-page/cards/CardList";
import CardListBySubcat from "../components/index-page/cards/CardListBySubCat";
import CategoriesFilter from "../components/index-page/filters/categories/CategoriesFilter";
import { StickyWrapper } from "../components/index-page/filters/styles";
import SubcategoriesFilter from "../components/index-page/filters/subcategories/SubcategoriesFilter";
import { Container } from "../global";


const IndexPageCategoryFilterView = ({
  cards,
  setFilters,
}) => {

  const [subCatInView, setSubCatInView] = useState({})

  return (
    <>
      <StickyWrapper>
        <CategoriesFilter setFilters={setFilters} />
        <SubcategoriesFilter setFilters={setFilters} subCatInView={subCatInView} />
      </StickyWrapper>
      <Container>
        <CardListBySubcat cards={cards.reverse()} setSubCatInView={setSubCatInView}/>
      </Container>
    </>
  );
};

export default IndexPageCategoryFilterView;

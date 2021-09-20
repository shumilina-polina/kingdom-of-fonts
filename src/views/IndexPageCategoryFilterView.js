import React, {useState, useEffect} from "react";
import CardList from "../components/index-page/cards/CardList";
import CardListBySubcat from "../components/index-page/cards/CardListBySubCat";
import CategoriesFilter from "../components/index-page/filters/categories/CategoriesFilter";
import { StickyWrapper } from "../components/index-page/filters/styles";
import SubcategoriesFilter from "../components/index-page/filters/subcategories/SubcategoriesFilter";
import { Container } from "../global";
import { useQuery } from "../hooks/useQuery";


const IndexPageCategoryFilterView = ({
  cards,
  setFilters,
}) => {

  const [subCatInView, setSubCatInView] = useState([])

  const query = useQuery();

  useEffect(() => {
    setSubCatInView([])
  }, [query.get("category")])

  console.log("subCatInView", subCatInView)

  return (
    <>
      <StickyWrapper>
        <CategoriesFilter setFilters={setFilters} />
        <SubcategoriesFilter subCatInView={subCatInView} setFilters={setFilters} subCatInView={subCatInView} />
      </StickyWrapper>
      <Container withMargin>
        <CardListBySubcat cards={cards} setSubCatInView={setSubCatInView}/>
      </Container>
    </>
  );
};

export default IndexPageCategoryFilterView;

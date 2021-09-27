import React, {useState, useEffect, useRef, createRef} from "react";
import CardList from "../components/index-page/cards/CardList";
import CardListBySubcat from "../components/index-page/cards/CardListBySubCat";
import CategoriesFilter from "../components/index-page/filters/categories/CategoriesFilter";
import { StickyWrapper } from "../components/index-page/filters/styles";
import SubcategoriesFilter from "../components/index-page/filters/subcategories/SubcategoriesFilter";
import { Container } from "../global";
import { useQuery } from "../hooks/useQuery";
import { Scrollspy } from "@makotot/ghostui";
import { categories } from "../categories";
import SubcategorySection from "../components/index-page/cards/SubcategorySection";


const IndexPageCategoryFilterView = ({
  cards,
  setFilters,
}) => {

  const query = useQuery();
  // const [subCatInView, setSubCatInView] = useState([])
  

  // let sectionRefs = [
  //         useRef(null),
  //     useRef(null),
  // ];

  const selectedCategory = categories?.find(
    (el) => el.url === query.get("category")
  );

  const arrLength = selectedCategory?.subCategories?.length;
  const [sectionRefs, setSectionRefs] = React.useState([]);

  React.useEffect(() => {
    // add or remove refs
    setSectionRefs(elRefs => (
      Array(arrLength).fill().map((_, i) => elRefs[i] || createRef())
    ));
  }, [arrLength]);

  // if (selectedCategory?.subCategories?.length === 2) {
  //   sectionRefs = [
  //     useRef(null),
  //     useRef(null),
  //   ]
  // };

  

  // sectionRefs

  // for (let i = 0; i < 6; i++) {
  //   sectionRefs[i] = useRef(null)
  // }

  // const sectionRefs = [
  //   useRef(null),
  //   useRef(null),
  //   useRef(null),
  //   useRef(null),
  //   useRef(null)
  // ];

  // const query = useQuery();

  // useEffect(() => {
  //   setSubCatInView([])
  // }, [query.get("category")])

  // console.log("subCatInView", subCatInView)

  return (
    <Scrollspy offset={-50} sectionRefs={sectionRefs}>
      {({ currentElementIndexInViewport }) => (
        <>
          {console.log("currentElementIndexInViewport", currentElementIndexInViewport)}
          <StickyWrapper>
            <CategoriesFilter setFilters={setFilters} />
            <SubcategoriesFilter
              setFilters={setFilters}
              currentElementIndexInViewport={currentElementIndexInViewport}
            />
          </StickyWrapper>
          <Container withMargin>
            {selectedCategory?.subCategories?.map((subCat, idx) => {
              const sortedCards = cards.filter((card) => card.subCategory === subCat.name)
              return (
                <SubcategorySection 
                  selectedCategory={selectedCategory}
                  ref={sectionRefs[idx]}
                  key={"section-" + idx}
                  subCat={subCat}
                  sortedCards={sortedCards}
                />
              )
            })}
          </Container>
        </>
      )}
    </Scrollspy>
  );
};

export default IndexPageCategoryFilterView;

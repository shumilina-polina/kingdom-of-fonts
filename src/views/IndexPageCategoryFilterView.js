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
import ScrollButtons from "../components/index-page/scroll-buttons/ScrollButtons";


const IndexPageCategoryFilterView = ({
  cards,
  category
  // setFilters,
}) => {

  // const query = useQuery();

  // const selectedCategory = categories?.find(
  //   (el) => el.url === query.get("category")
  // );

  const arrLength = category?.subCategories?.length;
  const sectionRefs = Array(arrLength).fill().map((_, i) => createRef());

  // React.useEffect(() => {
  //   // add or remove refs
  //   setSectionRefs(elRefs => (
  //     Array(arrLength).fill().map((_, i) => elRefs[i] || createRef())
  //   ));
  // }, []);

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
          <StickyWrapper>
            <CategoriesFilter category={category} withMargin />
            <SubcategoriesFilter
              category={category}
              // setFilters={setFilters}
              currentElementIndexInViewport={currentElementIndexInViewport}
            />
          </StickyWrapper>
          <Container withMargin>
            {category?.subCategories?.map((subCat, idx) => {
              // console.log("subCat", subCat)
              const sortedCards = cards.filter((card) => card.node.fontSubcategory.includes(subCat.name))
              return (
                <SubcategorySection 
                  // category={category}
                  ref={sectionRefs[idx]}
                  key={"section-" + idx}
                  subCat={subCat}
                  sortedCards={sortedCards}
                />
              )
            })}
          </Container>
          <ScrollButtons />
        </>
      )}
    </Scrollspy>
  );
};

export default IndexPageCategoryFilterView;

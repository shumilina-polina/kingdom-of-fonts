import React, { useState, useEffect } from "react";
// import { cards } from "../components/index-page/cards/data";
import Layout from "../components/Layout";
// import Logo from "../components/logo/Logo";
import { Link, navigate } from "gatsby";
// import { useQuery } from "../hooks/useQuery";
// import IndexPageNoFiltersView from "../views/IndexPageNoFiltersView";
// import IndexPageCategoryFilterView from "../views/IndexPageCategoryFilterView";
// import IndexPageSubcategoryFilterView from "../views/IndexPageSubcategoryFilterView";
// import useCards from "../hooks/useCards";
// import { categories } from "../categories";
import SEO from "../seo";
// import {

//   LogoWithCurve,
//   CurveIcon,
//   ShadowCircle,
//   CurveMobileIcon,
// } from "../../components/access-page/style";
// import smoothscroll from 'smoothscroll-polyfill';

// window.__forceSmoothScrollPolyfill__ = true;

// if (typeof window !== 'undefined') {
//   require('smooth-scroll')('a[href*="#"]');
// }

// if (typeof window !== "undefined") {
//   // kick off the polyfill!
//   smoothscroll.polyfill();
// }


// markup
const IndexPage = () => {
  // включить эти две вещи когда будешь тестировать доступность
  // const [loading, setLoading] = useState(true);
  // const [access, setAccess] = useState(false);
  

  //вот эти две убрать
  // const [loading, setLoading] = useState(false);
  // const [access, setAccess] = useState(true);

  // const query = useQuery()

  // const getCategoryName = () => {
  //   const selectedCat = categories.find((el) => el.url === query.get("category"))
  //   if (selectedCat) {
  //     return selectedCat.name
  //   }
  //   return ""
  // }

  // const getSubCategoryName = () => {
  //   const selectedCat = categories.find((el) => el.url === query.get("category"))
  //   if (selectedCat) {
  //     const selectedSubCat = selectedCat?.subCategories.find((el) => el.url === query.get("subcategory"))
  //     if (selectedSubCat) {
  //       return selectedSubCat.name
  //     }
  //   }
  //   return ""
  // }
  

  // const [filters, setFilters] = useState({
  //   category: getCategoryName(),
  //   // subCategory: getSubCategoryName(),
  // });

  // console.log("query", filters)

  // const cards = useCards();


  //включить когда будешь тестировать доступность
  // useEffect(() => {
  //   if (typeof window !== "undefined") {
  //     if (localStorage.getItem("kingdomOfFontsAccess")) {
  //       setLoading(false);

  //       setAccess(true);
  //     } else {
  //       // setLoading(false);
  //       navigate("/buy");
  //     }
  //   }
  // }, []);

  // const multiPropsFilter = (cards, filters) => {
  //   const filterKeys = Object.keys(filters);
  //   return cards.filter((item) => {
  //     // validates all filter criteria
  //     return filterKeys.every((key) => {
  //       // ignores non-function predicates
  //       if (typeof filters[key] !== "function") {
  //         // return true;
  //         if (!filters[key].length) return true;
  //         if (Array.isArray(item[key])) {
  //           return item[key].some((keyElem) => filters[key].includes(keyElem));
  //         }
  //         return filters[key].includes(item[key]);
  //       }
  //       return filters[key](item[key]);
  //     });
  //   });
  // };

  // const filteredCards = multiPropsFilter(cards, filters);
  // console.log("cards", cards);
  // console.log("filters", filters);
  // console.log("filteredCards", filteredCards);

  // if (loading) {
  //   return <Layout></Layout>;
  // }

  // if (!access) {
  //   return <Layout>no access</Layout>;
  // }

  // console.log("filters", filters)

  useEffect(() => {
    navigate("/fonts/library")
  }, [])

  return (
    <Layout>
      <SEO
        title="Бесплатная кириллица"
        description="Подборка лучших кириллических шрифтов с бесплатной коммерческой лицензией для ваших проектов."
        keywords={[
          "подборка",
          "шрифты",
          "fonts",
          "кириллица",
          "бесплатно"
        ]}
        url="https://pavlushin.design/"
      />
      {/* <Logo /> */}
      {/* <Link to="/#footer">to footer</Link> */}
      {/* {query.get("category") ? (
        <IndexPageCategoryFilterView
          cards={filteredCards}
          setFilters={setFilters}
        />
      ) : (
        <IndexPageNoFiltersView cards={cards} setFilters={setFilters} />
      )} */}
    </Layout>
  );
};

export default IndexPage;

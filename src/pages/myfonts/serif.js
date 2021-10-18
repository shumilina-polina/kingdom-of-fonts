import React, { useState, useEffect } from "react";
// import { cards } from "../components/index-page/cards/data";
import Layout from "../../components/Layout";
import Logo from "../../components/logo/Logo";
import { Link, navigate } from "gatsby";
import { useQuery } from "../../hooks/useQuery";
import IndexPageNoFiltersView from "../../views/IndexPageNoFiltersView";
import IndexPageCategoryFilterView from "../../views/IndexPageCategoryFilterView";
// import IndexPageSubcategoryFilterView from "../views/IndexPageSubcategoryFilterView";
import useCards from "../../hooks/useCards";
import { categories } from "../../categories";
import SEO from "../../seo";
import {

  LogoWithCurve,
  CurveIcon,
  ShadowCircle,
  CurveMobileIcon,
  OverflowHidden,
  
} from "../../components/access-page/style";
import { useAccess } from "../../hooks/useAccess";
// import smoothscroll from 'smoothscroll-polyfill';

// window.__forceSmoothScrollPolyfill__ = true;

// if (typeof window !== 'undefined') {
//   require('smooth-scroll')('a[href*="#"]');
// }

// if (typeof window !== "undefined") {
//   // kick off the polyfill!
//   smoothscroll.polyfill();
// }


export const contentfulQuery = graphql`
  query contentfulSerifQuery {
    serifFonts: allContentfulPavlushinFont(
      sort: { fields: [fontOrderNumber], order: DESC }
      filter: { fontCategory: { eq: "Антиквы" }}
    ) {
      edges {
        node {
          id
          fontOrderNumber
          fontName
          fontWeights
          fontCategory
          fontSubcategory
          fontFormats
          fontBackground
          fontCurrency
          fontLink
          fontCSS {
            fontCSS
          }
          fontAuthors {
            raw
          }
          fontSize
          fontLetterSpacing
          fontLineHeight
          fontImage {
            fluid(maxWidth: 500) {
            ...GatsbyContentfulFluid_withWebp
            }
          }
        }
      }
    }
  }
`


// markup
const SerifPage = ({data}) => {

  const { loading } = useAccess()
  console.log("loading", loading)
  if (loading) {
    return <Layout></Layout>;
  }

  return (
    <Layout>
      <SEO
        // title="Бесплатная кириллица"
        // description="Подборка лучших кириллических шрифтов с бесплатной коммерческой лицензией для ваших проектов."
        // keywords={[
        //   "подборка",
        //   "шрифты",
        //   "fonts",
        //   "кириллица",
        //   "бесплатно"
        // ]}
        // url="https://pavlushin.design/"
      />

        <IndexPageCategoryFilterView
            cards={data.serifFonts.edges}
            category={categories[1]}
            // setFilters={setFilters}
        />
    </Layout>
  );
};

export default SerifPage;

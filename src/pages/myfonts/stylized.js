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
} from "../../components/access-page/style";
import { useAccess } from "../../hooks/useAccess";
import Spinner from "../../components/Spinner";
import { GlobalStyle } from "../../global";
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
  query contentfulStylizedQuery {
    stylizedFonts: allContentfulPavlushinFont(
      sort: { fields: [fontOrderNumber], order: DESC }
      filter: { fontCategory: { eq: "Стилизованные" }}
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
const StylizedPage = ({data}) => {

  const { loading } = useAccess()
  // console.log("loading", loading)
  if (loading) {
    return <Layout><Spinner/></Layout>;
  }

  return (
    <>
    {/* <GlobalStyle/> */}
    <Layout>
      
      <SEO
        url="https://pavlushin.design/myfonts/stylized"
      />
        <IndexPageCategoryFilterView
            cards={data.stylizedFonts.edges}
            category={categories[2]}
            // setFilters={setFilters}
        />
    </Layout>
    </>
  );
};

export default StylizedPage;

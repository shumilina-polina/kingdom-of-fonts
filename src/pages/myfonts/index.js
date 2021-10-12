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
// import smoothscroll from 'smoothscroll-polyfill';


export const contentfulQuery = graphql`
  query contentfulAllQuery {
    allFonts: allContentfulPavlushinFont(
      sort: { fields: [fontOrderNumber], order: DESC }
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
const IndexPage = ({data}) => {
console.log("data", data)
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
      <Logo />
        <IndexPageNoFiltersView cards={data.allFonts?.edges.slice(0,5)}/>
    </Layout>
  );
};

export default IndexPage;

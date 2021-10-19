import React, { useState, useEffect } from "react";
import Layout from "../../components/Layout";
import { navigate } from "gatsby";
import IndexPageCategoryFilterView from "../../views/IndexPageCategoryFilterView";
import { categories } from "../../categories";
import SEO from "../../seo";
import { useAccess } from "../../hooks/useAccess";
import Spinner from "../../components/Spinner";
import { GlobalStyle } from "../../global";

export const contentfulQuery = graphql`
  query contentfulHandwrittenQuery {
    handwrittenFonts: allContentfulPavlushinFont(
      sort: { fields: [fontOrderNumber], order: DESC }
      filter: { fontCategory: { eq: "Рукописные" }}
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
const HandwrittenPage = ({data}) => {
  const { loading } = useAccess()
  // console.log("loading", loading)
  if (loading) {
    return <Layout>
      <Spinner/>
    </Layout>;
  }


  return (
    <Layout>
      <GlobalStyle/>
      <SEO
        url="https://pavlushin.design/myfonts/handwritten"
      />
        <IndexPageCategoryFilterView
            cards={data.handwrittenFonts?.edges}
            category={categories[3]}
        />
    </Layout>
  );
};

export default HandwrittenPage;

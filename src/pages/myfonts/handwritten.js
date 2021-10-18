import React, { useState, useEffect } from "react";
import Layout from "../../components/Layout";
import { navigate } from "gatsby";
import IndexPageCategoryFilterView from "../../views/IndexPageCategoryFilterView";
import { categories } from "../../categories";
import SEO from "../../seo";
import { useAccess } from "../../hooks/useAccess";

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
  useAccess()


  return (
    <Layout>
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

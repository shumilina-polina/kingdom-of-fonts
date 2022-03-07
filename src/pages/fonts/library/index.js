import React from "react";
import Layout from "../../../components/Layout";
import IndexPageNoFiltersView from "../../../views/IndexPageNoFiltersView";
import SEO from "../../../seo";
import { useAccess } from "../../../hooks/useAccess";
import Spinner from "../../../components/Spinner";

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
// console.log("data", data)
const { loading } = useAccess()
// console.log("loading", loading)
if (loading) {
  return <Layout><Spinner/></Layout>;
}
  return (
    <>
    {/* <GlobalStyle/> */}
    <Layout logoHref="/fonts/library/">

      <SEO
        url="https://pavlushin.design/fonts/library"
      />
        <IndexPageNoFiltersView cards={data.allFonts?.edges}/>
    </Layout>
    </>
  );
};

export default IndexPage;

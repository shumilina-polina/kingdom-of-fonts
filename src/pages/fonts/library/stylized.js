import React from "react";
import Layout from "../../../components/Layout";
import IndexPageCategoryFilterView from "../../../views/IndexPageCategoryFilterView";
import { categories } from "../../../categories";
import SEO from "../../../seo";
import { useAccess } from "../../../hooks/useAccess";
import Spinner from "../../../components/Spinner";

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
    <Layout logoHref="/fonts/library/">

      <SEO
        url="https://pavlushin.design/fonts/library/stylized"
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

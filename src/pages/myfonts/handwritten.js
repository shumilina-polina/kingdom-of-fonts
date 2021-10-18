import React, { useState, useEffect } from "react";
import Layout from "../../components/Layout";
import { navigate } from "gatsby";
import IndexPageCategoryFilterView from "../../views/IndexPageCategoryFilterView";
import { categories } from "../../categories";
import SEO from "../../seo";

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

  // включить эти две вещи когда будешь тестировать доступность
  const [loading, setLoading] = useState(true);
  const [access, setAccess] = useState(false);


  //включить когда будешь тестировать доступность
  useEffect(() => {
    if (typeof window !== "undefined") {
      if (localStorage.getItem("kingdomOfFontsAccess")) {
        setLoading(false);
        setAccess(true);
      } else {
        navigate("https://fonts.pavlushin.design/")
      }
    }
  }, []);

  if (loading) {
    return <Layout></Layout>;
  }

  if (!access) {
    navigate("https://fonts.pavlushin.design/")
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
            cards={data.handwrittenFonts?.edges}
            category={categories[3]}
        />
    </Layout>
  );
};

export default HandwrittenPage;

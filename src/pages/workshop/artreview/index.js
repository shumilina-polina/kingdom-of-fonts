import React from "react"

import Layout from "../../../components/common/layout/promo"
import SEO from "../../../seo"
import ArtDirectionPromo from "../../../components/artreview/promo"

import seoImage from "../../../assets/artreview/seo.png"

const ArtDirectionIndexPage = () => {
  return (
    <Layout>
      <SEO
        title="Артдирекшен"
        description="Видеоразборы дважды в неделю и дизайн-практика под руководством арт-директора с персональной обратной связью"
        keywords="дизайн,design,арт,art"
        ogImage={seoImage}
        ogImageVk={seoImage}
        siteUrl="https://pavlushin.design/workshop/artreview/"
      />
      <ArtDirectionPromo />
    </Layout>
  )
}

export default ArtDirectionIndexPage

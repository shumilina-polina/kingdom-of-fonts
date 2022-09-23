import React, { useRef } from "react"

import Header from "../../common/Header"
import { PageDataContextProvider } from "../../../context/PageDataContext"
import ColorScheme from "../ColorScheme"
import SectionHero from "./SectionHero"
import SectionShapes from "./SectionShapes"
import SectionAbout from "./SectionAbout"
import SectionStories from "./SectionStories"
import SectionProcess from "./SectionProcess"
import SectionReviews from "./SectionReviews"
import SectionFAQ from "./SectionFAQ"
import SectionTariffs from "./SectionTariffs"
import Footer from "../Footer"

const Promo = () => {
  const tariffsElementRef = useRef()

  return (
    <PageDataContextProvider url="/artreview/promo/">
      <ColorScheme>
        <Header logoURL="/workshop/artreview/" />
        <SectionHero tariffsElementRef={tariffsElementRef} />
        <SectionShapes />
        <SectionAbout />
        <SectionStories />
        <SectionProcess />
        <SectionReviews />
        <SectionFAQ />
        <SectionTariffs innerRef={tariffsElementRef} />
        <Footer />
      </ColorScheme>
    </PageDataContextProvider>
  )
}

export default Promo

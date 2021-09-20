import React, { useContext, useState, useEffect } from "react";
import CardList from "../components/index-page/cards/CardList";
import { cards } from "../components/index-page/cards/data";
import Filters from "../components/index-page/filters/Filters";
import Layout from "../components/Layout";
import Logo from "../components/logo/Logo";
import { Link } from "gatsby";
import RestoreAccessPageView from "../views/RestoreAccessPageView";
import { StickyWrapper } from "../components/index-page/filters/styles";
import CategoriesFilter from "../components/index-page/filters/categories/CategoriesFilter";

// markup
const RestoreAccessPage = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      // localStorage.setItem("kingdomOfFontsAccess", "true");
    }
  }, []);
  return (
    <Layout footerReduced>
      <Logo />
      <StickyWrapper>
        <CategoriesFilter setFilters={() => {}} />
      </StickyWrapper>

      <RestoreAccessPageView/>
    </Layout>

  );
};

export default RestoreAccessPage;

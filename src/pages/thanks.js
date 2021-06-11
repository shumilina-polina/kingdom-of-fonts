import React, { useContext, useState, useEffect } from "react";
import CardList from "../components/index-page/cards/CardList";
import { cards } from "../components/index-page/cards/data";
import Filters from "../components/index-page/filters/Filters";
import Layout from "../components/Layout";
import Logo from "../components/logo/Logo";
import { Link } from "gatsby";

// markup
const ThanksPage = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("kingdomOfFontsAccess", "true");
    }
  }, []);
  return (
    <Layout>
      Thank you!<Link to={"/"}>go there</Link>
    </Layout>
  );
};

export default ThanksPage;

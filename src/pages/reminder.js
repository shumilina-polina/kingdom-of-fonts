import React, { useContext, useState, useEffect } from "react";
import CardList from "../components/index-page/cards/CardList";
import { cards } from "../components/index-page/cards/data";
import Filters from "../components/index-page/filters/Filters";
import Layout from "../components/Layout";
import Logo from "../components/logo/Logo";
import { Link } from "gatsby";

// markup
const ReminderPage = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("kingdomOfFontsAccess", "true");
    }
  }, []);
  return (
    <Layout>
      Reminder<Link to={"/"}>go there</Link>
    </Layout>
  );
};

export default ReminderPage;

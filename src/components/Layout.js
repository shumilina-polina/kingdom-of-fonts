import React from "react";
import { Container, GlobalStyle } from "../global";
import Footer from "./footer/Footer";
import "../fonts.css";

const Layout = ({ children }) => {
  return (
    <div >
      <GlobalStyle />
        <main style={{position: "relative"}}>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;

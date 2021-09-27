import React from "react";
import { Container, GlobalStyle } from "../global";
import Footer from "./footer/Footer";
import "../fonts.css";

if (typeof window !== 'undefined') {
  require('smooth-scroll')('a[href*="#"]');
}

const Layout = ({ children, footerReduced }) => {
  return (
    <>
      <GlobalStyle />
        <main style={{position: "relative"}}>{children}</main>
      <Footer footerReduced={footerReduced}/>
    </>
  );
};

export default Layout;

import React from "react";
import { Container, GlobalStyle } from "../global";
import Footer from "./footer/Footer";
import "../fonts.css";



const Layout = ({ children, footerReduced }) => {
  // if (typeof window !== 'undefined') {
  //   require('smooth-scroll')('a[href*="#"]');
  // }
  return (
    <>
      <GlobalStyle />
        <main style={{position: "relative"}}>{children}</main>
      <Footer footerReduced={footerReduced}/>
    </>
  );
};

export default Layout;

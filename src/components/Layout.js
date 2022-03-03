import React from "react";
import { Container, GlobalStyle } from "../global";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import "../fonts.css";
import { useLocation } from "@reach/router"


const Layout = ({ children, footerReduced, logoHref }) => {
  // if (typeof window !== 'undefined') {
  //   require('smooth-scroll')('a[href*="#"]');
  // }

  const location = useLocation()

  // const overflowed = ["/restore", "/buy", "/thanks"].includes(location.pathname);

  return (<>
    <GlobalStyle/>
    <Header logoHref={logoHref} />
    <main style={{position: "relative"}}>{children}</main>
    <Footer footerReduced={footerReduced}/>
  </>);
};

export default Layout;

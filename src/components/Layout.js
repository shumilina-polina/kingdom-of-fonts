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

  return (
    <Container>
      <GlobalStyle/>
      <Header logoHref={logoHref} />
      <main style={{position: "relative"}}>{children}</main>
      <Footer footerReduced={footerReduced}/>
    </Container>
  );
};

export default Layout;

import React from "react";
import { Container, GlobalStyle } from "../global";
import Footer from "./footer/Footer";

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <Container>
        <main>{children}</main>
      </Container>
      <Footer />
    </>
  );
};

export default Layout;

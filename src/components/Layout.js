import React from "react";
import { Container, GlobalStyle } from "../global";
import Footer from "./footer/Footer";
import "../fonts.css";
import Logo from "../components/logo/Logo";
import {

  LogoWithCurve,
  CurveIcon,
  ShadowCircle,
  CurveMobileIcon,
  OverflowHidden,
} from "../components/access-page/style";



const Layout = ({ children, footerReduced }) => {
  // if (typeof window !== 'undefined') {
  //   require('smooth-scroll')('a[href*="#"]');
  // }
  return (
    <>
      <GlobalStyle />
            {/* <OverflowHidden> */}
            <CurveIcon/>
        <CurveMobileIcon/>
      {/* </OverflowHidden> */}
        
        <LogoWithCurve>
          <Logo />
          <ShadowCircle/>
        </LogoWithCurve>
        <main style={{position: "relative"}}>{children}</main>
      <Footer footerReduced={footerReduced}/>
    </>
  );
};

export default Layout;

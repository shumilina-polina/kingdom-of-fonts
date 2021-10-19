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
  LogoWrapper,
} from "../components/access-page/style";
import img from "../assets/svgs/curve.svg";



const Layout = ({ children, footerReduced }) => {
  // if (typeof window !== 'undefined') {
  //   require('smooth-scroll')('a[href*="#"]');
  // }

  const overflowed = typeof window !== undefined && ["/restore", "/buy", "/thanks"].includes(window.location.pathname);

  return (
    <>
      <GlobalStyle overflowed={overflowed}/>
      <LogoWrapper img={img}>
          <CurveIcon/>
          <CurveMobileIcon/>
          <LogoWithCurve>
            <Logo />
          </LogoWithCurve>
      </LogoWrapper>
        
        <main style={{position: "relative"}}>{children}</main>
      <Footer footerReduced={footerReduced}/>
    </>
  );
};

export default Layout;

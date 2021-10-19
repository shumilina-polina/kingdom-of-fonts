import React from "react";
import { Container, GlobalStyle } from "../global";
import Footer from "./footer/Footer";
import "../fonts.css";
import Logo from "../components/logo/Logo";
import { useLocation } from "@reach/router"
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

  const location = useLocation()

  const overflowed = ["/restore", "/buy", "/thanks"].includes(location.pathname);

  return (
    <>
      
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

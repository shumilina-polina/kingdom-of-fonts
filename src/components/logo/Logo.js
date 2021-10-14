import React from "react";
import { LogoWrapper, ShadowCircle } from "./styles";
import LogoIcon from "../../assets/svgs/logo.svg";
import { navigate } from "gatsby";

const Logo = () => {
  return (
    <LogoWrapper onClick={() => navigate("/myfonts")}>
      <LogoIcon />
      <ShadowCircle/>
    </LogoWrapper>
  );
};

export default Logo;

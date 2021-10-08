import React from "react";
import { LogoWrapper } from "./styles";
import LogoIcon from "../../assets/svgs/logo.svg";
import { navigate } from "gatsby";

const Logo = () => {
  return (
    <LogoWrapper onClick={() => navigate("/myfonts")}>
      <LogoIcon />
    </LogoWrapper>
  );
};

export default Logo;

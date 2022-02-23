import React from "react";
import { Link } from "gatsby"
import { LogoWrapper } from "./styles";
import LogoIcon from "../../assets/svgs/logo.svg";

const Logo = ({ href }) => {
  return (
    <LogoWrapper as={Link} to={href}>
      <LogoIcon />
    </LogoWrapper>
  );
};

export default Logo;

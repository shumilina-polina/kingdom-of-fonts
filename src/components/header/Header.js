import React from "react"
import { Link } from "gatsby"

import { Container } from "../../global";
import { CurveWrapper, Curve, CurveMobile, HeaderWrapper, LogoWrapper } from "../access-page/style"
import PavlushinIcon from "../../assets/svgs/pavlushin.svg"
import Logo from "../logo/Logo"
import { HeaderButton } from "./styles"
import UserMenuButton from "./UserMenuButton"

const Header = ({ logoHref }) => {
  return (
    <Container>
      <HeaderWrapper>
        <CurveWrapper>
          <Curve/>
          <CurveMobile/>
        </CurveWrapper>
        <LogoWrapper>
          <HeaderButton as={Link} to="/">
            <PavlushinIcon />
          </HeaderButton>
          <Logo href={logoHref} />
          <UserMenuButton />
        </LogoWrapper>
      </HeaderWrapper>
    </Container>
  )
}

export default Header

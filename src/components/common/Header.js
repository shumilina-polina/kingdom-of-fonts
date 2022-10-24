import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import Logo from "../../assets/common/svgs/logo.svg"

const Header = ({ logoURL = "/" }) => {
  return (
    <HeaderBody>
      <HeaderButton as={Link} to={logoURL}>
        <Logo />
      </HeaderButton>
    </HeaderBody>
  )
}

const HeaderBody = styled.div`
  height: 3.25em;
  
  display: flex;
  justify-content: center;
  align-items: center;
  
  @media (min-width: 1090px) {
    height: 5.25em;
    margin-bottom: 1em;
    justify-content: space-between;
  }
`

const HeaderButton = styled.button`
  text-decoration: none;
  background: none;
  border: none;
  cursor: pointer;
  
  color: var(--graphite-70);

  width: 1.5em;
  height: 1.5em;
  
  svg {
    width: 100%;
    height: 100%;
  }
  
  &:hover {
    color: var(--graphite-80);
  }
  
  &:active {
    color: var(--graphite-90);
  }
  
  @media (min-width: 1090px) {
    width: 2.25em;
    height: 2.25em;
  }
`

export default Header

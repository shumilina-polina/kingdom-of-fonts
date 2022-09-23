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
  height: 6.25em;
  
  padding-bottom: 1em;
  
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const HeaderButton = styled.button`
  text-decoration: none;
  background: none;
  border: none;
  cursor: pointer;
  
  color: var(--graphite-70);

  width: 2.25em;
  height: 2.25em;
  
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
`

export default Header

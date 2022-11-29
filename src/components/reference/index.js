import React from "react"
import styled from "styled-components"

import { Root, Container } from "../common/layout/promo"
import Header from "./Header"
import ColorScheme from "./ColorScheme"

const Reference = () => {
  return (
    <ColorScheme>
      <Root>
        <Header />
        <Container>
          <Padding />
        </Container>
      </Root>
    </ColorScheme>
  )
}

const Padding = styled.div`
  height: 5000px;
`

export default Reference

import React from "react"
import styled from "styled-components"

export const Layout = ({ children }) => {
  return (
    <Root>
      <Container>
        {children}
      </Container>
    </Root>
  )
}

export const Root = styled.div`
  font-family: "Manrope", sans-serif;
  font-size: 5vw; /* 320px */
  font-weight: 500;

  color: var(--graphite-0);
  background-color: var(--graphite-100);

  min-height: 100vh;
  
  display: flex;
  flex-direction: column;

  @media (min-width: 750px) {
    font-size: 2.133vw;
  }

  @media (min-width: 1090px) {
    font-size: min(1.111vw, 16px); /* 1440px */
  }
`

export const Container = styled.div`
  flex: 1;

  @media (min-width: 750px) {
    align-self: center;
    width: 45em;
  }

  @media (min-width: 1090px) {
    width: 78em;
  }
`

export default Layout

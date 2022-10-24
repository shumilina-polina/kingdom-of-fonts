import React from "react"
import styled from "styled-components"

const SectionHeader = ({ children }) => {
  return (
    <Body>
      <Text>
        {children}
      </Text>
    </Body>
  )
}

const Body = styled.div`
  height: 5em;

  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 1090px) {
    height: 6em;
    
    border: 0.1em solid var(--graphite-80);
    border-radius: 4.5em 4.5em 0 0;
  }
`

const Text = styled.div`
  font-weight: 800;
  font-size: 0.5em;
  letter-spacing: 2.8em;
  text-transform: uppercase;
  
  margin-right: -3.2em;
  
  user-select: none;

  @media (min-width: 1090px) {
    font-weight: 700;
    font-size: 0.875em;
    letter-spacing: 3.2em;
  }
`

export default SectionHeader

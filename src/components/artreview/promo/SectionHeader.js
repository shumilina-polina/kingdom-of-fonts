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
  border: 0.1em solid var(--graphite-80);
  border-radius: 4.5em 4.5em 0 0;

  height: 6em;

  display: flex;
  justify-content: center;
  align-items: center;
`

const Text = styled.div`
  font-weight: 700;
  font-size: 0.875em;
  letter-spacing: 3.2em;
  text-transform: uppercase;
  
  margin-right: -3.2em;
  
  user-select: none;
`

export default SectionHeader

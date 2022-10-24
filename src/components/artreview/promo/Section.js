import styled from "styled-components"

const Section = styled.section`
  position: relative;

  padding: 0 0.5em;
  
  border-top: 0.08em solid var(--graphite-80);
  
  display: flex;
  flex-direction: column;
  
  ${props => props.clipContent && `
    overflow: hidden;
  `}

  @media (min-width: 1090px) {
    padding: 0 0 4.5em 0;
    border: none;
  }
`

export default Section

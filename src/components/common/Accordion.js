import React, { useCallback, useState } from "react"
import styled from "styled-components"

import textStyles from "./text"

import Collapse from "./Collapse"

import ArrowDown from "../../assets/common/svgs/arrow-down.svg"

export const Accordion = styled.div``

export const AccordionEntry = ({ children, title, isOpenInitial = false }) => {
  const [isOpen, setIsOpen] = useState(isOpenInitial)

  const toggle = useCallback(() => {
    setIsOpen((isOpen) => !isOpen)
  }, [])

  return (
    <AccordionEntryBody>
      <AccordionEntryHeader onClick={toggle} isOpen={isOpen}>
        <AccordionEntryHeaderText>
          {title}
        </AccordionEntryHeaderText>
        <AccordionEntryHeaderLine />
        <AccordionEntryHeaderArrowWrapper isOpen={isOpen}>
          <ArrowDown />
        </AccordionEntryHeaderArrowWrapper>
      </AccordionEntryHeader>
      <Collapse isOpen={isOpen}>
        <AccordionEntryContent>
          {children}
        </AccordionEntryContent>
      </Collapse>
    </AccordionEntryBody>
  )
}

export const AccordionEntryBody = styled.div`
  background-color: var(--graphite-100);

  border: 0.1em solid var(--graphite-80);
  border-radius: 4.375em;
  
  margin-bottom: -0.1em;
  padding: 3.2em 5.4em;
  
  overflow: hidden;
`

export const AccordionEntryHeader = styled.div`
  position: relative;
  
  display: flex;
  align-items: center;
  
  cursor: pointer;
  
  &::after {
    content: "";
    
    position: absolute;
    
    z-index: 1;
    
    top: -150%;
    left: -20%;
    bottom: -150%;
    right: -20%;
    
    ${props => props.isOpen && `
      bottom: -80%;
    `}
  }
`

export const AccordionEntryHeaderText = styled.div`
  ${textStyles.header.L}
`

export const AccordionEntryHeaderLine = styled.div`
  border-bottom: 0.1em solid var(--graphite-80);
  flex: 1;

  margin: 0 2.5em 0 4.5em;
`

export const AccordionEntryHeaderArrowWrapper = styled.div`
  color: var(--graphite-70);
  
  display: flex;
  justify-content: center;
  align-items: center;
  
  width: 1.6em;
  height: 2.25em;
  
  svg {
    width: 100%;
    height: 100%;
  }
  
  transition: var(--collapse-duration) transform var(--collapse-easing);
  
  ${props => props.isOpen && `
    transform: rotate(-180deg);
  `}
  
  ${AccordionEntryHeader}:hover & {
    color: var(--graphite-80);
  }
`

export const AccordionEntryContent = styled.div`
  ${textStyles.text.S}
  
  color: var(--graphite-50);

  padding-top: 2em;
`

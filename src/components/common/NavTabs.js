import React, { createContext, useCallback, useContext, useEffect, useRef, useState } from "react"
import styled from "styled-components"

import textStyles from "./text"

const Context = createContext({
  selected: null,
  onSelect: () => {},
})

export const NavTabs = ({ selected, onSelect, children }) => {
  return (
    <Context.Provider value={{ selected, onSelect }}>
      <Wrapper>
        <NavTabsBody>
          {children}
        </NavTabsBody>
      </Wrapper>
    </Context.Provider>
  )
}

export const NavTab = ({ name, children }) => {
  const { selected, onSelect } = useContext(Context)
  const isActive = name === selected

  const handleClick = useCallback(() => {
    onSelect(name)
  }, [name, onSelect])

  return (
    <NavTabBody isActive={isActive} onClick={handleClick}>
      <Label>{children}</Label>
    </NavTabBody>
  )
}

const Wrapper = styled.div`
  position: relative;
`

const NavTabsBody = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 0.875em 0;
`

const NavTabBody = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5em;
  
  box-sizing: content-box;
  height: 2em;
  padding: 0 0.75em;

  text-decoration: none;
  cursor: pointer;
  
  color: var(--glass-30);

  &:hover {
    color: var(--glass-60);
  }
  
  ${props => props.isActive && `
    color: var(--glass-60);
  `}
`

const Label = styled.div`
  ${textStyles.item.S}
  
  user-select: none;
`

export const NavTabsCollapse = ({ isOpen, children }) => {
  return (
    <NavTabsOuterWrapper isOpen={isOpen}>
      <NavTabsInnerWrapper>
        {children}
      </NavTabsInnerWrapper>
    </NavTabsOuterWrapper>
  )
}

const NavTabsInnerWrapper = styled.div`
`

const NavTabsOuterWrapper = styled.div`
  --header-padding-offset: 1.25em;
  --tab-height: 3.75em;
  --duration: 0.3s;
  
  --height-closed: 0em;
  --height-open: calc(var(--tab-height) - var(--header-padding-offset));

  transition: height var(--duration);
  height: var(--height-open);

  ${props => !props.isOpen && `
    height: var(--height-closed);
  `}

  ${NavTabsInnerWrapper} {
    transition:
      opacity calc(var(--duration) / 1.2) calc(var(--duration) / 6),
      transform var(--duration),
      visibility var(--duration);

    ${props => !props.isOpen && `
      transition: 
        opacity calc(var(--duration) / 2),
        transform var(--duration), 
        visibility var(--duration);
        
      opacity: 0;
      visibility: hidden;
      transform: translateY(calc(var(--height-closed) - var(--height-open)));
    `}
  }
`

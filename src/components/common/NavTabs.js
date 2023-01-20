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
  
  color: var(--glass-03);

  &:hover {
    color: var(--glass-06);
  }
  
  ${props => props.isActive && `
    color: var(--glass-06);
  `}
`

const Label = styled.div`
  ${textStyles.item.S}
  
  user-select: none;
`

import React, { createContext, useCallback, useContext } from "react"
import styled from "styled-components"

import textStyles from "./text"

const NavPillsContext = createContext({
  selected: null,
  onSelect: () => {},
})

export const NavPills = ({ selected, onSelect, children }) => {
  return (
    <NavPillsContext.Provider value={{ selected, onSelect }}>
      <NavPillsBody>
        {children}
      </NavPillsBody>
    </NavPillsContext.Provider>
  )
}

export const NavPill = ({ name, icon, children }) => {
  const { selected, onSelect } = useContext(NavPillsContext)
  const isActive = name === selected

  const handleClick = useCallback(() => {
    onSelect(name)
  }, [name, onSelect])

  return (
    <NavPillBody isActive={isActive} onClick={handleClick}>
      {icon
        ? <Icon>{icon}</Icon>
        : <Label>{children}</Label>
      }
    </NavPillBody>
  )
}

const NavPillsBody = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const NavPillBody = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5em;
  
  height: 2.25em;
  padding: 0 0.875em;

  border-radius: 9999px;
  
  text-decoration: none;
  cursor: pointer;
  
  color: var(--gray-30);
  background: var(--gray-70);
  
  ${props => props.isActive 
    ? `
      color: var(--gray-70);
      background: var(--gray-20);
    ` 
    : `
      &:hover {
        background: var(--gray-60);
      }
    `
  }
`

const Icon = styled.div`
  display: flex;

  --icon-size: 1.25em;

  width: var(--icon-size);
  height: var(--icon-size);
  
  /* TODO: set pill width explicitly when there's an icon? */
  margin: 0 -0.375em;
  
  svg {
    width: 100%;
    height: 100%;
  }
    
  ${props => props.isActive && `
    transform: scale(1.1);
  `}
`

const Label = styled.div`
  ${textStyles.item.S}
  
  user-select: none;
`

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

export const NavPill = ({ name, icon, isHidden = false, children }) => {
  const { selected, onSelect } = useContext(NavPillsContext)
  const isActive = name === selected

  const handleClick = useCallback(() => {
    onSelect(name)
  }, [name, onSelect])

  return (
    <NavPillBody
      isActive={isActive}
      onClick={handleClick}
      isHidden={isHidden}
    >
      {icon
        ? <Icon isActive={isActive}>{icon}</Icon>
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
  --hide-duration: 0.1s;
  --show-duration: 0.25s;
  --show-delay: 0.1s;

  display: flex;
  align-items: center;
  gap: 0.5em;
  
  height: 2.25em;
  padding: 0 0.875em;

  border-radius: 9999px;
  
  text-decoration: none;
  cursor: pointer;
  
  transition: opacity var(--hide-duration), visibility var(--hide-duration);
  
  color: var(--glass-40);
  background: var(--glass-3);
  
  ${props => props.isActive 
    ? `
      color: var(--gray-60);
      background: var(--glass-60);
    ` 
    : `
      &:hover {
        background: var(--glass-6);
      }
    `
  }
  
  ${props => props.isHidden && `
    opacity: 0;
    visibility: hidden;
  `}
  
  ${props => !props.isHidden && `
    transition-duration: var(--show-duration);
    transition-delay: var(--show-delay);
  `}
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

import React from "react"
import styled from "styled-components"

import textStyles from "./text"

export const NavTop = ({ children }) => {
  return (
    <NavTopBody>
      {children}
    </NavTopBody>
  )
}

export const NavTopItem = ({ icon, dropdown, children, ...otherProps }) => {
  return (
    <NavTopItemWrapper>
      <NavTopItemBody {...otherProps}>
        {icon && <NavTopItemIcon>{icon}</NavTopItemIcon>}
        <NavTopItemLabel>{children}</NavTopItemLabel>
      </NavTopItemBody>
      {dropdown}
    </NavTopItemWrapper>
  )
}

export const NavTopDropdown = ({ children }) => {
  return (
    <NavTopDropdownBody>
      <NavTopDropdownContent>
        {children}
      </NavTopDropdownContent>
    </NavTopDropdownBody>
  )
}

export const NavTopDropdownItem = ({ icon, children, ...otherProps }) => {
  return (
    <NavTopDropdownItemBody {...otherProps}>
      {icon && <NavTopDropdownItemIcon>{icon}</NavTopDropdownItemIcon>}
      <NavTopDropdownItemLabel>{children}</NavTopDropdownItemLabel>
    </NavTopDropdownItemBody>
  )
}

const Icon = styled.div`
  display: flex;

  width: var(--icon-size);
  height: var(--icon-size);
  
  svg {
    width: 100%;
    height: 100%;
  }
`

const NavTopBody = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const NavTopItemWrapper = styled.div`
  position: relative;
`

const NavTopItemBody = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5em;
  
  height: 2.25em;
  padding: 0 0.75em;

  border-radius: 9999px;
  
  text-decoration: none;
  cursor: pointer;
  
  ${NavTopItemWrapper}:hover & {
    background: var(--glass-3);
  }
  
  &:hover:active {
    background: var(--glass-10);
  }
`

const NavTopItemIcon = styled(Icon)`
  color: var(--glass-60);
  
  --icon-size: 1em;
  
  ${NavTopItemWrapper}:hover & {
    color: var(--glass-80);
  }
`

const NavTopItemLabel = styled.div`
  ${textStyles.item.S}
  
  color: var(--glass-40);
  
  user-select: none;
`

const NavTopDropdownBody = styled.div`
  --distance: 0.5em;
  --border-radius: 1em;

  position: absolute;
  z-index: 10;
  top: calc(100% + var(--distance));
  
  background: var(--glass-3);
  backdrop-filter: blur(1em);
  border-radius: var(--border-radius);
  
  transition: opacity, visibility, transform;
  transition-duration: 0.2s;
  transition-delay: 0.3s;
  
  ${NavTopItemWrapper}:not(:hover) & {
    visibility: hidden;
    opacity: 0;
    transform: scale(0.95);
    transition-delay: 0s;
  }
  
  &::before {
    content: "";
    
    position: absolute;
    top: calc(var(--distance) * -1);
    width: 100%;
    height: var(--distance);
  }
`

const NavTopDropdownContent = styled.div`
  border-radius: var(--border-radius);
  
  width: 14em;
  padding: 0.25em 0;
  
  overflow: hidden;
`

const NavTopDropdownItemBody = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5em;
  
  height: 2em;
  padding: 0 1em;
  
  text-decoration: none;
  cursor: pointer;
  
  &:hover {
    background: var(--glass-3);
  }
  
  &:active {
    background: rgba(255, 255, 255, 0.2);
  }
  
  // TODO: disabled
`

const NavTopDropdownItemIcon = styled(Icon)`
  color: var(--gray-30);
  
  --icon-size: 0.75em;
  
  ${NavTopDropdownItemBody}:active & {
    color: var(--gray-70);
  }
`

const NavTopDropdownItemLabel = styled.div`
  ${textStyles.caption.S}
  
  color: var(--gray-30);
  
  user-select: none;
  
  ${NavTopDropdownItemBody}:active & {
    color: var(--gray-90);
  }
`

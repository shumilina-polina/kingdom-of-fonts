import React from "react"
import styled  from "styled-components"

import textStyles from "./text"

const Button = ({ children, type = "primary", icon, iconLeft, iconRight, ...otherProps }) => {
  return (
    <Body type={type} {...otherProps}>
      {icon && <Icon>{icon}</Icon>}
      {iconLeft && <IconLeft>{iconLeft}</IconLeft>}
      {children}
      {iconRight && <IconRight>{iconRight}</IconRight>}
    </Body>
  )
}

const Body = styled.a`
  ${textStyles.item.L}
  
  border-radius: 1em;
  
  padding: 0 1.5em;
  height: 3.375em;
  
  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
  user-select: none;
  text-decoration: none;

  border: 0.084em solid transparent;

  @media (min-width: 1090px) {
    border-radius: 0.6em;
    height: 3em;
  }
  
  ${props => {
    switch (props.type) {
      case "primary": return `
        color: var(--graphite-100);
        background: var(--accent) border-box;
        
        &:hover {
          opacity: 0.8;
        }
        
        &:active {
          opacity: 0.6;
        }
      `
      case "secondary": return `
        color: var(--graphite-50);
        background: var(--graphite-100);
        
        &:hover {
          opacity: 0.95;
        }
        
        &:active {
          opacity: 0.9;
        }
      `
      case "outline": return `
        color: var(--graphite-60);
        border-color: var(--graphite-60);
    
        &:hover {
          color: var(--graphite-70);
          border-color: var(--graphite-70);
        }
        
        &:active {
          color: var(--graphite-80);
          border-color: var(--graphite-80);
        }
      `
      default:
    }
  }}
`

const Icon = styled.div`
  width: 0.9em;
  height: 0.9em;
  
  margin: 0 -0.45em;
  
  svg {
    width: 100%;
    height: 100%;
  }
`

const IconLeft = styled(Icon)`
  margin: 0 0.37em 0 -0.37em;
`

const IconRight = styled(Icon)`
  margin: 0 -0.37em 0 0.37em;
`

export default Button

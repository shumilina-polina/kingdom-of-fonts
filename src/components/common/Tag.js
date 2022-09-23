import React, { useRef } from "react"
import styled from "styled-components"

import { mapping as textStyles } from "./text"
import { TextHighlightStyle } from "./TextHighlight"

import useCSSVariable from "../../hooks/useCSSVariable"

const Tag = ({
  children,
  size = "M",
  highlight = false,
  hoverable = false,
  icon,
  iconLeft,
  iconRight,
  progress = 0,
  progressTween = 0,
  ...otherProps
}) => {
  const ref = useRef()

  useCSSVariable(ref, "--progress", progress)
  useCSSVariable(ref, "--progress-tween", `${progress > 0 ? progressTween / 1000 : 0}s`)

  return (
    <Wrapper size={size} hoverable={hoverable} ref={ref} {...otherProps}>
      <Body highlight={highlight} />
      <Progress />
      <Content highlight={highlight}>
        {icon && <Icon highlight={highlight}>{icon}</Icon>}
        {iconLeft && <IconLeft highlight={highlight}>{iconLeft}</IconLeft>}
        <Text>{children}</Text>
        {iconRight && <IconRight highlight={highlight}>{iconRight}</IconRight>}
      </Content>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  ${props => textStyles.tag[props.size]}
  
  --border-width: 0.125em;
  --tag-height: 2em;
  
  --progress: 0;
  --progress-tween: 0s;
  
  height: var(--tag-height);

  padding: 0 calc(var(--tag-height) / 2);
  
  position: relative;
  
  ${props => props.hoverable && `
    cursor: pointer;
    
    &:hover ${Body} {
      background: var(--graphite-90);
    }
  `}
`

const Body = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;

  border: var(--border-width) solid currentcolor;
  border-radius: 9999px;

  ${props => props.highlight && `
    background: 
      linear-gradient(var(--graphite-100), var(--graphite-100)) padding-box,
      var(--accent) border-box;
    border-color: transparent;
  `}
`

const Progress = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2;

  border: var(--border-width) solid transparent;
  border-radius: 9999px;

  overflow: hidden;

  &::after {
    content: "";
    display: block;

    width: 100%;
    height: 100%;

    background: var(--graphite-80);

    transform: scaleX(var(--progress));
    transform-origin: top left;
    
    transition: var(--progress-tween) transform linear;
  }
`

const Content = styled.div`
  position: relative;
  z-index: 3;

  display: flex;
  align-items: center;
  
  height: 100%;

  ${props => props.highlight && TextHighlightStyle}
`

const Text = styled.div`

`

const Icon = styled.div`
  display: flex;

  --icon-size: 0.875em;

  height: var(--icon-size);
  
  margin: 0 calc(var(--icon-size) / -2);
  
  svg {
    width: 100%;
    height: 100%;
    
    ${props => props.highlight && `
      color: var(--accent-flat-1);
    `}
  }
`

const IconLeft = styled(Icon)`
  margin: 0 0.3em 0 0;
`

const IconRight = styled(Icon)`
  margin: 0 0 0 0.3em;
  
  svg {
    ${props => props.highlight && `
      color: var(--accent-flat-2);
    `}
  }
`

export default Tag

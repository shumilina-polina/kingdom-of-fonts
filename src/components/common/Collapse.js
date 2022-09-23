import React, { useCallback, useRef } from "react"
import styled from "styled-components"

import useResizeObserver from "../../hooks/useResizeObserver"

export const Collapse = ({ isOpen, children }) => {
  const wrapperElementRef = useRef()
  const contentElementRef = useRef()

  const onContentResize = useCallback((contentElement) => {
    wrapperElementRef.current.style.setProperty("--content-height", `${contentElement.clientHeight}px`)
  }, [])

  useResizeObserver(contentElementRef, onContentResize)

  return (
    <CollapseWrapper ref={wrapperElementRef} isOpen={isOpen}>
      <CollapseContent ref={contentElementRef}>
        {children}
      </CollapseContent>
    </CollapseWrapper>
  )
}

export const CollapseWrapper = styled.div`
  overflow: hidden;
  
  transition:
    var(--collapse-duration) height var(--collapse-easing),
    var(--collapse-duration) opacity var(--collapse-easing),
    var(--collapse-duration) transform var(--collapse-easing);
  
  height: 0;
  opacity: 0;
  // transform: translateY(1em);
  transform: translateY(0.5em);
  
  ${props => props.isOpen && `
    height: var(--content-height);
    opacity: 1;
    transform: none;
  `}
`

export const CollapseContent = styled.div`
`

export default Collapse

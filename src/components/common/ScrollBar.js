import React, { useCallback, useRef, useState } from "react"
import styled from "styled-components"

import useCSSVariable from "../../hooks/useCSSVariable"
import useResizeObserver from "../../hooks/useResizeObserver"
import useScrollObserver from "../../hooks/useScrollObserver"

import "./ScrollBar.css"

const bodyClassName = "scrollbar-dragging"

const ScrollBar = ({ scrollingElementRef }) => {
  const [containerWidth, setContainerWidth] = useState(0)
  const [contentWidth, setContentWidth] = useState(0)

  const scrollPositionMax = contentWidth - containerWidth

  const onResize = useCallback((scrollingElement) => {
    setContainerWidth(scrollingElement.clientWidth)
    setContentWidth(scrollingElement.scrollWidth)
  }, [])

  useResizeObserver(scrollingElementRef, onResize)

  const handleElementRef = useRef()

  const visibleContentRatio = contentWidth > 0
    ? Math.min(containerWidth / contentWidth, 1)
    : 1
  const handleWidthPercent = visibleContentRatio * 100

  useCSSVariable(handleElementRef, "--handle-width", `${handleWidthPercent}%`)

  const updateHandlePosition = useCallback((scrollPosition) => {
    const scrollPositionRatio = scrollPositionMax > 0
      ? scrollPosition / scrollPositionMax
      : 0
    const handleTranslatePercent = (
      scrollPositionRatio * (1 - visibleContentRatio) * (1 / visibleContentRatio) * 100
    )
    handleElementRef.current.style.setProperty("--handle-translate", `${handleTranslatePercent}%`)
  }, [scrollPositionMax, visibleContentRatio])

  const onScroll = useCallback((scrollingElement) => {
    updateHandlePosition(scrollingElement.scrollLeft)
  }, [updateHandlePosition])

  useScrollObserver(scrollingElementRef, onScroll)

  const scrollBarElementRef = useRef()

  const [scrollBarWidth, setScrollBarWidth] = useState(0)

  const onScrollBarResize = useCallback((scrollBarElement) => {
    setScrollBarWidth(scrollBarElement.clientWidth)
  }, [])

  useResizeObserver(scrollBarElementRef, onScrollBarResize)

  const scrollBarPositionMax = scrollBarWidth * (1 - visibleContentRatio)
  const contentToScrollBarWidthRatio = scrollBarPositionMax > 0
    ? scrollPositionMax / scrollBarPositionMax // TODO: compensate for scrollbar border and padding?
    : 0

  const onDragStart = useCallback((e) => {
    e.preventDefault()

    const scrollingElement = scrollingElementRef.current
    const dragStart = {
      mouseX: e.clientX,
      scrollPosition: scrollingElement.scrollLeft
    }

    const onDrag = (e) => {
      const mouseDiffX = e.clientX - dragStart.mouseX
      const scrollDiffX = mouseDiffX * contentToScrollBarWidthRatio

      scrollingElement.scrollLeft = dragStart.scrollPosition + scrollDiffX
    }

    const onDragStop = () => {
      document.removeEventListener("mousemove", onDrag)
      document.removeEventListener("mouseup", onDragStop)

      document.body.classList.remove(bodyClassName)
    }

    document.addEventListener("mousemove", onDrag)
    document.addEventListener("mouseup", onDragStop)

    document.body.classList.add(bodyClassName)
  }, [scrollingElementRef, contentToScrollBarWidthRatio])

  return (
    <ScrollBarBody ref={scrollBarElementRef}>
      <ScrollBarHandle
        ref={handleElementRef}
        onMouseDown={onDragStart}
      />
    </ScrollBarBody>
  )
}

const ScrollBarBody = styled.div`
  width: 100%;
  height: 1em;
  
  padding: 0.125em;
  
  border: 1px solid var(--graphite-80);
  border-radius: 9999px;
  
  @media (min-width: 1090px) {
    height: 1.5em;
    
    padding: 0.19em;
  }
`

const ScrollBarHandle = styled.div`
  height: 100%;
  
  background: var(--graphite-90);
  
  border-radius: 9999px;
  
  width: var(--handle-width);
  transform: translateX(var(--handle-translate));
  
  &:hover {
    background: var(--graphite-80);
    cursor: grab;
  }
  
  body.${bodyClassName} & {
    background: var(--graphite-80);
    cursor: grabbing;
  }
`

export default ScrollBar

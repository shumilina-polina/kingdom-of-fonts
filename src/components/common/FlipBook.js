import React, { useCallback, useRef, useState } from "react"
import styled from "styled-components"

import useResizeObserver from "../../hooks/useResizeObserver"

const FlipBook = ({ frameCount = 1, idleFrame = null, defaultFrame = 0, render }) => {
  const wrapperRef = useRef()

  const [width, setWidth] = useState(0)
  const [frame, setFrame] = useState(defaultFrame)

  const stripWidth = width / frameCount

  const onResize = useCallback((wrapper) => {
    setWidth(wrapper.clientWidth)
  }, [])

  useResizeObserver(wrapperRef, onResize)

  const onMouseMove = useCallback((e) => {
    setFrame(stripWidth > 0
      ? Math.floor(e.nativeEvent.offsetX / stripWidth)
      : 0
    )
  }, [stripWidth])

  const onMouseLeave = useCallback((e) => {
    if (idleFrame !== null) {
      setFrame(idleFrame)
    }
  }, [idleFrame])

  return (
    <FlipBookWrapper
      ref={wrapperRef}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
    >
      {render(frame)}
    </FlipBookWrapper>
  )
}

const FlipBookWrapper = styled.div`
  width: 100%;
  height: 100%;
`

export default FlipBook

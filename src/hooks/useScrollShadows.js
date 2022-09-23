import { useCallback, useEffect, useState } from "react"

import useResizeObserver from "./useResizeObserver"
import useScrollObserver from "./useScrollObserver"

const useScrollShadows = (scrollingElementRef) => {
  const [scrollPositionMax, setScrollPositionMax] = useState(0)

  const onResize = useCallback((scrollingElement) => {
    setScrollPositionMax(scrollingElement.scrollWidth - scrollingElement.clientWidth)
  }, [])

  useResizeObserver(scrollingElementRef, onResize)

  const [showLeftShadow, setShowLeftShadow] = useState(false)
  const [showRightShadow, setShowRightShadow] = useState(false)

  const updateShadows = useCallback((scrollPosition) => {
    setShowLeftShadow(scrollPosition > 0)
    setShowRightShadow(scrollPosition < scrollPositionMax)
  }, [scrollPositionMax])

  const onScroll = useCallback((scrollingElement) => {
    updateShadows(scrollingElement.scrollLeft)
  }, [updateShadows])

  useScrollObserver(scrollingElementRef, onScroll)

  useEffect(() => {
    updateShadows(0)
  }, [updateShadows])

  return {
    showLeftShadow,
    showRightShadow,
  }
}

export default useScrollShadows

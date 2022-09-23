import React, { useCallback, useEffect, useRef, useState } from "react"
import styled from "styled-components"

import { mod } from "../../utils"

const Stories = ({
  stories,
  visibilityThreshold = 0.8,
  interval = 1000 / 8,
  frameDuration = 5000,
  renderTags = (tags) => tags,
}) => {
  const wrapperElementRef = useRef()

  const [frame, setFrame] = useState(0)
  const [clock, setClock] = useState(0)
  const [isHovering, setIsHovering] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  const isPaused = isHovering || !isVisible

  const progress = Math.min(clock / frameDuration, 1)

  const navigate = useCallback((step) => {
    setFrame((frame) => mod(frame + step, stories.length))
  }, [stories])

  const navigateNext = useCallback(() => {
    navigate(+1)
  }, [navigate])

  useEffect(() => {
    const wrapperElement = wrapperElementRef.current

    const callback = (entries) => {
      setIsVisible(entries.some((entry) => entry.isIntersecting))
    }

    const observer = new IntersectionObserver(callback, {
      threshold: visibilityThreshold
    })

    observer.observe(wrapperElement)

    return () => {
      observer.unobserve(wrapperElement)
    }
  }, [visibilityThreshold])

  useEffect(() => {
    if (isPaused) return

    const intervalID = setInterval(() => {
      setClock((clock) => clock + interval)
    }, interval)

    return () => {
      clearInterval(intervalID)
    }
  }, [isPaused, interval])

  useEffect(() => {
    setClock(0)
  }, [frame])

  useEffect(() => {
    if (clock > frameDuration) {
      navigateNext()
    }
  }, [clock, navigateNext, frameDuration])

  const renderFrame = stories[frame].frame

  const tags = stories.map((story, i) => (
    story.tag({
      key: i,
      hoverable: true,
      progress: i === frame ? progress : 0,
      progressTween: interval,
      onMouseEnter: () => {
        setFrame(i)
        setIsHovering(true)
      },
      onMouseLeave: () => {
        setIsHovering(false)
      },
    })
  ))

  return (
    <Wrapper ref={wrapperElementRef}>
      {renderTags(tags)}
      {renderFrame()}
      <ClickArea onClick={navigateNext}/>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  transition: 0.2s transform;

  &:hover {
    transform: scale(102%);
  }
  
  &:active {
    transform: scale(100%);
  }
`

const ClickArea = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  
  cursor: pointer;
`

export default Stories

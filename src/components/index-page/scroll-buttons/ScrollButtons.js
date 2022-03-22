import React, { useCallback, useEffect, useState } from "react"
import { ScrollButtonsContainer, ScrollButtonTop, ScrollButtonBottom } from "./styles"

const ScrollButtons = () => {
  const [isAtTop, setIsAtTop] = useState(false)
  const [isAtBottom, setIsAtBottom] = useState(false)

  const scrollToTop = useCallback(() => {
    window.scrollTo({top: 0, behavior: "smooth"})
  }, [])

  const scrollToBottom = useCallback(() => {
    window.scrollTo({top: document.body.scrollHeight - window.innerHeight, behavior: "smooth"})
  }, [])

  const onWindowScroll = useCallback(() => {
    setIsAtTop(window.scrollY === 0)
    setIsAtBottom(window.scrollY === document.body.scrollHeight - window.innerHeight)
  }, [])

  useEffect(() => {
    onWindowScroll()

    window.addEventListener('scroll', onWindowScroll)

    return () => {
      window.removeEventListener('scroll', onWindowScroll)
    }
  }, [onWindowScroll])

  return (
    <ScrollButtonsContainer>
      <ScrollButtonTop onClick={scrollToTop} disabled={isAtTop} />
      <ScrollButtonBottom onClick={scrollToBottom} disabled={isAtBottom} />
    </ScrollButtonsContainer>
  )
}

export default ScrollButtons

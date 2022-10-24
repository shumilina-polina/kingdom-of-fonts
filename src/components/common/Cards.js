import React, { createContext, useCallback, useContext, useEffect, useRef, useState } from "react"
import styled from "styled-components"

import { HideScrollbars } from "./misc"

import { buildThresholdList } from "../../utils"

const DotsContext = createContext({
  rootRef: null,
  subscribe: () => {},
  unsubscribe: () => {},
  trigger: () => {},
})

const Cards = ({ cards, renderDots }) => {
  const scrollContainerRef = useRef()
  const [subscribed, setSubscribed] = useState([])

  const subscribe = useCallback((callback) => {
    setSubscribed((subscribed) => [...subscribed, callback])
  }, [])

  const unsubscribe = useCallback((callback) => {
    setSubscribed((subscribed) => subscribed.filter((item) => item !== callback))
  }, [])

  const trigger = useCallback((cardID, ratio) => {
    subscribed.forEach((callback) => {
      callback(cardID, ratio)
    })
  }, [subscribed])

  const context = {
    rootRef: scrollContainerRef,
    subscribe,
    unsubscribe,
    trigger,
  }

  return (
    <Wrapper>
      <DotsContext.Provider value={context}>
        <ScrollContainer ref={scrollContainerRef}>
          {cards.map((card) => (
            <Card key={card.id} cardID={card.id}>
              {card.frame()}
            </Card>
          ))}
        </ScrollContainer>
        {renderDots(
          <DotsContainer>
            {cards.map((card) => (
              <Dot key={card.id} cardID={card.id} />
            ))}
          </DotsContainer>
        )}
      </DotsContext.Provider>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: relative;
`

const ScrollContainer = styled.div`
  margin: 0 -0.5em;

  display: flex;

  scroll-snap-type: x mandatory;

  ${HideScrollbars}
`

const Card = ({ children, cardID }) => {
  const ref = useRef()
  const { rootRef, trigger } = useContext(DotsContext)

  const onIntersectionChange = useCallback(([entry]) => {
    trigger(cardID, entry.intersectionRatio)
  }, [trigger, cardID])

  useEffect(() => {
    const observer = new IntersectionObserver(onIntersectionChange, {
      root: rootRef.current,
      threshold: buildThresholdList(),
    })

    observer.observe(ref.current)

    return () => {
      observer.disconnect()
    }
  }, [rootRef, onIntersectionChange, cardID])

  return (
    <CardContainer ref={ref}>
      {children}
    </CardContainer>
  )
}

const CardContainer = styled.div`
  flex: 1 0 100%;

  padding: 0 0.5em;

  scroll-snap-align: center;
  scroll-snap-stop: always;
`

const DotsContainer = styled.div`
  display: flex;
  gap: 0.5em;

  --dot-max-width: 1.05em;
  --dot-min-opacity: 0.1;
  --dot-max-opacity: 0.25;
  --dot-ratio: 0;
`

const Dot = ({ cardID }) => {
  const ref = useRef()
  const { subscribe, unsubscribe } = useContext(DotsContext)

  const handleRatioChange = useCallback((changedCardID, ratio) => {
    if (changedCardID !== cardID) return

    ref.current.style.setProperty("--dot-ratio", ratio)
  }, [cardID])

  useEffect(() => {
    subscribe(handleRatioChange)

    return () => {
      unsubscribe(handleRatioChange)
    }
  }, [handleRatioChange, subscribe, unsubscribe])

  return (
    <DotBody ref={ref}>
      <DotContent />
    </DotBody>
  )
}

const DotBody = styled.div`
  padding: 0.15625em;

  background: currentcolor;

  border-radius: 9999px;

  opacity: calc(
    var(--dot-min-opacity) + (var(--dot-max-opacity) - var(--dot-min-opacity)) * var(--dot-ratio)
  );
`

const DotContent = styled.div`
  width: calc(var(--dot-max-width) * var(--dot-ratio));
`

export default Cards

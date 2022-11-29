import React, { createContext, useCallback, useContext, useEffect, useRef, useState } from "react"
import styled from "styled-components"

import textStyles from "./text"

const Context = createContext({
  selected: null,
  onSelect: () => {},
  register: () => {},
  unregister: () => {},
})

export const NavTabs = ({ selected, onSelect, children }) => {
  const underlineElementRef = useRef()
  const [tabElementRefs, setTabElementRefs] = useState({})

  useEffect(() => {
    const tabElementRef = tabElementRefs[selected]

    // TODO: ??
    if (!tabElementRef || !tabElementRef.current) return

    const tabElement = tabElementRef.current
    const underlineElement = underlineElementRef.current

    // TODO: update these on screen resize?
    underlineElement.style.width = `${tabElement.getBoundingClientRect().width}px`
    underlineElement.style.left = `${tabElement.offsetLeft}px`
  }, [tabElementRefs, selected])

  const register = useCallback((name, element) => {
    setTabElementRefs((tabElementRefs) => ({
      ...tabElementRefs,
      [name]: element,
    }))
  }, [])

  const unregister = useCallback((name) => {
    setTabElementRefs((tabElementRefs) => (
      Object.fromEntries(Object.entries(tabElementRefs).filter(([key, ]) => key !== name))
    ))
  }, [])

  return (
    <Context.Provider value={{ selected, onSelect, register, unregister }}>
      <Wrapper>
        <NavTabsBody>
          {children}
        </NavTabsBody>
        <NavTabUnderline ref={underlineElementRef} />
      </Wrapper>
    </Context.Provider>
  )
}

export const NavTab = ({ name, children }) => {
  const ref = useRef()

  const { selected, onSelect, register, unregister } = useContext(Context)
  const isActive = name === selected

  const handleClick = useCallback(() => {
    onSelect(name)
  }, [name, onSelect])

  useEffect(() => {
    register(name, ref)

    return () => {
      unregister(name)
    }
  }, [register, unregister, name])

  return (
    <NavTabBody isActive={isActive} onClick={handleClick} ref={ref}>
      <Label>{children}</Label>
    </NavTabBody>
  )
}

const Wrapper = styled.div`
  position: relative;
`

const NavTabsBody = styled.div`
  --vertical-padding: 0.875em;
  
  display: flex;
  justify-content: center;
  align-items: center;

  padding-top: var(--vertical-padding);
`

const NavTabBody = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5em;
  
  box-sizing: content-box;
  height: 2em;
  padding: 0 0.75em var(--vertical-padding);

  text-decoration: none;
  cursor: pointer;
  
  color: var(--gray-30);
  
  ${props => props.isActive 
    ? `
      color: var(--gray-20);
    ` 
    : `
      &:hover {
        color: var(--gray-20);
      }
    `
  }
`

const NavTabUnderline = styled.div`
  position: absolute;
  bottom: 0;
  
  border-bottom: 0.125em solid var(--gray-20);
  
  transition: width 0.2s, left 0.2s;
  
  pointer-events: none;
`

const Label = styled.div`
  ${textStyles.item.S}
  
  user-select: none;
`

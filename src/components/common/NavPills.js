import React, { createContext, useCallback, useContext, useEffect, useRef, useState } from "react"
import styled from "styled-components"

import textStyles from "./text"

import SearchIcon from "../../assets/common/svgs/search.svg"
import CrossIcon from "../../assets/common/svgs/cross.svg"

const NavPillsContext = createContext({
  selected: null,
  onSelect: () => {},
})

export const NavPills = ({ selected, onSelect, children }) => {
  return (
    <NavPillsContext.Provider value={{ selected, onSelect }}>
      <NavPillsBody>
        {children}
      </NavPillsBody>
    </NavPillsContext.Provider>
  )
}

export const NavPill = ({ name, icon, isHidden = false, children }) => {
  const { selected, onSelect } = useContext(NavPillsContext)
  const isActive = name === selected

  const handleClick = useCallback(() => {
    onSelect(name)
  }, [name, onSelect])

  return (
    <NavPillBody
      isActive={isActive}
      onClick={handleClick}
      isHidden={isHidden}
    >
      {icon
        ? <Icon isActive={isActive}>{icon}</Icon>
        : <Label>{children}</Label>
      }
    </NavPillBody>
  )
}

const NavPillsBody = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const NavPillBody = styled.a`
  --hide-duration: 0.1s;
  --show-duration: 0.25s;
  --show-delay: 0.1s;

  display: flex;
  align-items: center;
  gap: 0.5em;
  
  height: 2.25em;
  padding: 0 0.875em;

  border-radius: 9999px;
  
  text-decoration: none;
  cursor: pointer;
  
  transition: opacity var(--hide-duration), visibility var(--hide-duration);
  
  color: var(--glass-40);
  background: var(--glass-3);
  
  ${props => props.isActive 
    ? `
      color: var(--gray-60);
      background: var(--glass-60);
    ` 
    : `
      &:hover {
        background: var(--glass-6);
      }
    `
  }
  
  ${props => props.isHidden && `
    opacity: 0;
    visibility: hidden;
  `}
  
  ${props => !props.isHidden && `
    transition-duration: var(--show-duration);
    transition-delay: var(--show-delay);
  `}
`

const Icon = styled.div`
  display: flex;

  --icon-size: 1.25em;

  width: var(--icon-size);
  height: var(--icon-size);
  
  /* TODO: set pill width explicitly when there's an icon? */
  margin: 0 -0.375em;
  
  svg {
    width: 100%;
    height: 100%;
  }
    
  ${props => props.isActive && `
    transform: scale(1.1);
  `}
`

const Label = styled.div`
  ${textStyles.item.S}
  
  user-select: none;
`

export const Search = ({ isOpen, onToggle, innerRef }) => {
  const bodyElementRef = useRef()
  const inputElementRef = useRef()

  const [searchText, setSearchText] = useState("")
  const isBlank = searchText === ""

  const focus = useCallback(() => {
    inputElementRef.current.focus()
  }, [])

  const handleTextChange = (e) => {
    setSearchText(e.target.value)
  }

  const clearText = () => {
    setSearchText("")
    focus()
  }

  useEffect(() => {
    if (isOpen) {
      focus()
    }
  }, [isOpen, focus])

  return (
    <SearchWrapper ref={innerRef}>
      <SearchBody isOpen={isOpen} ref={bodyElementRef}>
        <SearchButton isOpen={isOpen} onClick={onToggle}>
          <SearchButtonIcon>
            <SearchIcon />
          </SearchButtonIcon>
        </SearchButton>
        <SearchInput
          isOpen={isOpen}
          isBlank={isBlank}
          value={searchText}
          onChange={handleTextChange}
          ref={inputElementRef}
        />
        {!isBlank && (
          <SearchClearButton isOpen={isOpen} onClick={clearText}>
            <SearchClearButtonIcon>
              <CrossIcon />
            </SearchClearButtonIcon>
          </SearchClearButton>
        )}
      </SearchBody>
    </SearchWrapper>
  )
}

const SearchWrapper = styled.div`
  --button-size: 2.25em;
  --field-padding: 0.875em;
  --duration: 0.25s;
  --delay: 0;
  
  width: var(--button-size);
  height: var(--button-size);
`

const SearchBody = styled.div`
  position: absolute;
  right: 0;

  display: flex;
  align-items: center;
  
  width: var(--button-size);
  height: var(--button-size);

  border-radius: 9999px;
  
  overflow: hidden;
  
  color: var(--glass-60);
  background: var(--glass-3);
  
  transition: width var(--duration);
  
  ${props => props.isOpen && `
    width: 100%;
    
    transition-delay: var(--delay);
  `}
`

const SearchButton = styled.button`
  font-size: inherit;
  border: none;
  cursor: pointer;
  padding: 0;
  
  flex-shrink: 0;
  
  display: flex;
  justify-content: center;
  align-items: center;
  
  color: var(--glass-40);
  background: none;

  width: var(--button-size);
  height: var(--button-size);

  border-radius: 9999px;

  ${props => !props.isOpen && `
    :hover {
      background: var(--glass-6);
    }
  `}

  ${props => props.isOpen && `
    :hover {
      color: var(--gray-40);
    }
    
    :active {
      color: var(--gray-50);
    }
  `}
`

const SearchButtonIcon = styled.div`
  display: flex;

  --icon-size: 1.125em;

  width: var(--icon-size);
  height: var(--icon-size);
  
  svg {
    width: 100%;
    height: 100%;
  }
`

const SearchClearButton = styled(SearchButton)`
  position: absolute;
  right: 0;
  
  transition: opacity var(--duration) var(--delay), visibility var(--duration) var(--delay);

  ${props => !props.isOpen && `
    opacity: 0;
    visibility: hidden;
  `}
`

const SearchClearButtonIcon = styled(SearchButtonIcon)`
  --icon-size: 0.75em;
`

const SearchInput = styled.input`
  ${textStyles.text.S}
  
  font-family: inherit;
  
  background: none;
  border: none;
  outline: none;

  color: var(--glass-60);

  width: calc(100% - var(--button-size) * 2);
  
  ${props => props.isBlank && `
    width: calc(100% - var(--button-size) - var(--field-padding));
  `}
  
  ${props => !props.isOpen && `
    transition: visibility var(--duration) var(--delay);
    visibility: hidden;
  `}
`

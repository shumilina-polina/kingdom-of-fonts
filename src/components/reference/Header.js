import React, { useCallback, useEffect, useRef, useState } from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import shuffle from "lodash.shuffle"

import { NavTop, NavTopItem, NavTopDropdown, NavTopDropdownItem } from "../common/NavTop"
import { NavPills, NavPill } from "../common/NavPills"
import { NavTabs, NavTab } from "../common/NavTabs"

import textStyles from "../common/text"

import Logo from "../../assets/common/svgs/logo.svg"
import LoginIcon from "../../assets/common/svgs/login.svg"
import NavProjectsIcon from "../../assets/common/svgs/nav-projects.svg"
import NavCampusIcon from "../../assets/common/svgs/nav-campus.svg"
import NavBasisIcon from "../../assets/common/svgs/nav-basis.svg"
import LightningIcon from "../../assets/common/svgs/lightning-2.svg"
import SearchIcon from "../../assets/common/svgs/search.svg"
import CrossIcon from "../../assets/common/svgs/cross.svg"

const subcategories = [
  {name: "tab1", label: "Вёрстка"},
  {name: "tab2", label: "Типографика"},
  {name: "tab3", label: "Иллюстрация"},
  {name: "tab4", label: "Визуализация"},
  {name: "tab5", label: "Колористика"},
  {name: "tab6", label: "Интерфейс"},
  {name: "tab7", label: "Анимация"},
  {name: "tab8", label: "Носители"},
]

const categories = [
  {name: "design", label: "Дизайн", subcategories: shuffle(subcategories)},
  {name: "text", label: "Текст", subcategories: shuffle(subcategories)},
  {name: "dev", label: "Разработка", subcategories: shuffle(subcategories)},
  {name: "product", label: "Продукт", subcategories: shuffle(subcategories)},
  {name: "brain", label: "Мозг", subcategories: shuffle(subcategories)},
]

const Header = () => {
  const searchElementRef = useRef()

  const [category, setCategory] = useState("all")
  const [subcategory, setSubcategory] = useState("all")
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  const handleClick = useCallback((e) => {
    if (
      e.target.closest("a, button") === null
      && !searchElementRef.current.contains(e.target)
    ) {
      setIsSearchOpen(false)
    }
  }, [])

  return (
    <HeaderBody onClick={handleClick}>
      <HeaderButtonLeft as={Link} to="/reference/">
        <Logo />
      </HeaderButtonLeft>
      <HeaderButtonRight as={Link} to="/reference/">
        <LoginIcon />
      </HeaderButtonRight>
      <NavTop>
        <NavTopItem
          icon={<NavProjectsIcon />}
          as="a"
          href="https://www.behance.net/pavlushin"
          target="_blank"
          rel="noopener noreferrer"
        >
          Проекты
        </NavTopItem>
        <NavTopItem
          icon={<NavCampusIcon />}
          dropdown={(
            <NavTopDropdown>
              <NavTopDropdownItem icon={<LightningIcon />} as={Link} to="/workshop/artreview/">
                Артдирекшен
              </NavTopDropdownItem>
              <NavTopDropdownItem icon={<LightningIcon />}>
                Консультации
              </NavTopDropdownItem>
              <NavTopDropdownItem icon={<LightningIcon />} as={Link} to="/fonts/library/">
                Шрифтотёрка
              </NavTopDropdownItem>
            </NavTopDropdown>
          )}
        >
          Кампус
        </NavTopItem>
        <NavTopItem icon={<NavBasisIcon />}>
          Основание
        </NavTopItem>
        <NavTopItem
          as="a"
          href="/blog/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Блог
        </NavTopItem>
      </NavTop>
      <Title>Справочник</Title>
      <NavPillsWrapper>
        <NavPills selected={!isSearchOpen ? category : null} onSelect={setCategory}>
          <NavPill name="all" icon={<LightningIcon />} />
          <NavPill name="design">Дизайн</NavPill>
          <NavPill name="text">Текст</NavPill>
          <NavPill name="dev">Разработка</NavPill>
          <NavPill name="product">Продукт</NavPill>
          <NavPill name="brain">Мозг</NavPill>
          <Search
            innerRef={searchElementRef}
            isOpen={isSearchOpen}
            onToggle={() => { setIsSearchOpen(!isSearchOpen) }}
          />
        </NavPills>
      </NavPillsWrapper>
      <NavTabsCollapse isOpen={!isSearchOpen && category !== "all"}>
        <NavTabs selected={subcategory} onSelect={setSubcategory}>
          <NavTab name="all">Всё</NavTab>
          <NavTab name="tab1">Вёрстка</NavTab>
          <NavTab name="tab2">Типографика</NavTab>
          <NavTab name="tab3">Иллюстрация</NavTab>
          <NavTab name="tab4">Визуализация</NavTab>
          <NavTab name="tab5">Колористика</NavTab>
          <NavTab name="tab6">Интерфейс</NavTab>
          <NavTab name="tab7">Анимация</NavTab>
          <NavTab name="tab8">Носители</NavTab>
        </NavTabs>
      </NavTabsCollapse>
    </HeaderBody>
  )
}

const HeaderBody = styled.div`
  border-bottom: var(--gray-70) 0.0625em solid;
  
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  
  position: sticky;
  top: -9.25em;
  
  padding: 1em 0 1.25em;
`

const HeaderButton = styled.button`
  text-decoration: none;
  background: none;
  border: none;
  cursor: pointer;
  
  color: var(--gray-40);

  width: 1.5em;
  height: 1.5em;
  
  svg {
    width: 100%;
    height: 100%;
  }
  
  &:hover {
    color: var(--gray-50);
  }
  
  &:active {
    color: var(--gray-60);
  }
  
  @media (min-width: 1090px) {
    width: 2.5em;
    height: 2.5em;
  }
`

const HeaderButtonLeft = styled(HeaderButton)`
  position: fixed;
  top: 1.125em;
  left: 2.55em;
`

const HeaderButtonRight = styled(HeaderButton)`
  position: fixed;
  top: 1.125em;
  right: 2.55em;
`

const Title = styled.div`
  ${textStyles.title.L}
  
  color: var(--gray-30);
  
  margin: 0.57em 0 0.5em;
`

const NavPillsWrapper = styled.div`
  position: relative;
  z-index: 1;
`

const Search = ({ isOpen, onToggle, innerRef }) => {
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
  
  color: var(--gray-30);
  background: var(--gray-70);
  
  transition: width var(--duration);
  
  ${props => props.isOpen && `
    width: 100%;
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
  
  color: var(--gray-30);
  background: none;

  width: var(--button-size);
  height: var(--button-size);

  border-radius: 9999px;

  ${props => !props.isOpen && `
    :hover {
      background: var(--gray-60);
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
  
  transition: opacity var(--duration), visibility var(--duration);

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

  color: var(--gray-30);

  width: calc(100% - var(--button-size) * 2);
  
  ${props => props.isBlank && `
    width: calc(100% - var(--button-size) - var(--field-padding));
  `}
  
  ${props => !props.isOpen && `
    transition: visibility var(--duration);
    visibility: hidden;
  `}
`

const NavTabsCollapse = ({ isOpen, children }) => {
  return (
    <NavTabsOuterWrapper isOpen={isOpen}>
      <NavTabsInnerWrapper>
        {children}
      </NavTabsInnerWrapper>
    </NavTabsOuterWrapper>
  )
}

const NavTabsInnerWrapper = styled.div`
`

const NavTabsOuterWrapper = styled.div`
  --header-padding: 1.25em;
  --tab-height: 3.75em;
  --duration: 0.3s;

  margin-bottom: calc(var(--header-padding) * -1);

  transition: height var(--duration);
  height: var(--tab-height);

  ${props => !props.isOpen && `
    height: var(--header-padding);
  `}

  ${NavTabsInnerWrapper} {
    transition:
      opacity calc(var(--duration) / 1.2) calc(var(--duration) / 6),
      transform var(--duration),
      visibility var(--duration);

    ${props => !props.isOpen && `
      transition: 
        opacity calc(var(--duration) / 2),
        transform var(--duration), 
        visibility var(--duration);
        
      opacity: 0;
      visibility: hidden;
      transform: translateY(calc(var(--header-padding) - 100%));
    `}
  }
`

export default Header

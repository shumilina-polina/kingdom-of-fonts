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

  const headerBodyElementRef = useRef()
  const floatingHeaderBodyElementRef = useRef()

  const [isHeaderVisible, setIsHeaderVisible] = useState(true)
  const [isMouseAtTop, setIsMouseAtTop] = useState(false)

  const isFloatingHeaderVisible = !isHeaderVisible && isMouseAtTop

  useEffect(() => {
    const headerBodyElement = headerBodyElementRef.current

    const callback = (entries) => {
      setIsHeaderVisible(entries.some((entry) => entry.isIntersecting))
    }

    const observer = new IntersectionObserver(callback, {
      threshold: 0.1
    })

    observer.observe(headerBodyElement)

    return () => {
      observer.unobserve(headerBodyElement)
    }
  }, [])

  useEffect(() => {
    const floatingHeaderBodyElement = floatingHeaderBodyElementRef.current
    const floatingHeaderHeight = floatingHeaderBodyElement.offsetHeight

    const onMouseMove = (e) => {
      setIsMouseAtTop(e.clientY <= floatingHeaderHeight || floatingHeaderBodyElement.contains(e.target))
    }

    document.addEventListener("mousemove", onMouseMove)

    return () => {
      document.removeEventListener("mousemove", onMouseMove)
    }
  }, [])

  return (
    <>
      <HeaderButtonLeft as={Link} to="/glossary/">
        <Logo />
      </HeaderButtonLeft>
      <HeaderButtonRight as={Link} to="/glossary/">
        <LoginIcon />
      </HeaderButtonRight>
      <HeaderBody onClick={handleClick} ref={headerBodyElementRef}>
        <HeaderContent>
          <MainNavigation />
          <Title>Справочник</Title>
          <NavPillsWrapper>
            <NavPills selected={!isSearchOpen ? category : null} onSelect={setCategory}>
              <NavPill name="all" icon={<LightningIcon />} isHidden={isSearchOpen} />
              <NavPill name="design" isHidden={isSearchOpen}>Дизайн</NavPill>
              <NavPill name="text" isHidden={isSearchOpen}>Текст</NavPill>
              <NavPill name="dev" isHidden={isSearchOpen}>Разработка</NavPill>
              <NavPill name="product" isHidden={isSearchOpen}>Продукт</NavPill>
              <NavPill name="brain" isHidden={isSearchOpen}>Мозг</NavPill>
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
        </HeaderContent>
      </HeaderBody>
      <FloatingHeaderBody isVisible={isFloatingHeaderVisible} ref={floatingHeaderBodyElementRef}>
        <FloatingHeaderContent>
          <MainNavigation />
        </FloatingHeaderContent>
      </FloatingHeaderBody>
    </>
  )
}

const MainNavigation = () => {
  return (
    <MainNavigationBody>
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
    </MainNavigationBody>
  )
}

const MainNavigationBody = styled.div`
  
`

const HeaderBody = styled.div`
  
`

const HeaderContent = styled.div`
  padding: 1em 0 2.5em;
  
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`

const FloatingHeaderBody = styled(HeaderBody)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  max-width: 1440px;
  z-index: 999;
  margin: 0 auto 1.5em;
  
  transition: transform, visibility;
  transition-duration: 0.3s;
  
  &::after {
    content: "";
    
    position: absolute;
    z-index: 1;
    inset: -1px 0px -2em;
    
    pointer-events: none;
    user-select: none;
    
    backdrop-filter: blur(2em);
    mask-image: linear-gradient(to top, transparent, black 2em);
  }
  
  ${props => !props.isVisible && `
    transform: translateY(calc(-100% - 2em));
    visibility: hidden;
    transition-delay: 0.5s;
  `}
`

const FloatingHeaderContent = styled(HeaderContent)`
  position: relative;
  z-index: 2;
  
  padding: 1em 0 0.7em;
  
  border-bottom-width: 2px;
  border-bottom-style: solid;
  border-bottom-color: transparent;
  border-image-source: linear-gradient(
    to right, 
    rgba(255, 255, 255, 0) 0.6%, 
    rgba(255, 255, 255, 0.042) 4.2%, 
    rgba(255, 255, 255, 0.042) 95.07%, 
    rgba(255, 255, 255, 0) 98.24%
  );
  border-image-slice: 1;
`

const HeaderButton = styled.button`
  position: fixed;
  top: 1em;
  z-index: 1000;
  
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
  left: 2.55em;
`

const HeaderButtonRight = styled(HeaderButton)`
  right: 2.55em;
`

const Title = styled.div`
  ${textStyles.title.L}
  
  color: var(--glass-60);
  
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
  --header-padding-offset: 1.25em;
  --tab-height: 3.75em;
  --duration: 0.3s;
  
  --height-closed: 0em;
  --height-open: calc(var(--tab-height) - var(--header-padding-offset));

  transition: height var(--duration);
  height: var(--height-open);

  ${props => !props.isOpen && `
    height: var(--height-closed);
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
      transform: translateY(calc(var(--height-closed) - var(--height-open)));
    `}
  }
`

export default Header

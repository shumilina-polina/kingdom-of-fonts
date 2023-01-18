import React, { createContext, useCallback, useContext, useEffect, useRef, useState } from "react"
import styled from "styled-components"
import Masonry from "react-masonry-css"
import lottie from "lottie-web"
import debounce from "lodash.debounce"
import throttle from "lodash.throttle"

import textStyles from "./text"

import * as styles from "./Card.module.css"

import PlaceholderImage from "../../assets/glossary/svgs/card-image.svg"
import LinkIcon from "../../assets/common/svgs/card-link.svg"
import ShareLinkIcon from "../../assets/common/svgs/share-link.svg"
import ShareFacebookIcon from "../../assets/common/svgs/share-facebook.svg"
import ShareTwitterIcon from "../../assets/common/svgs/share-twitter.svg"
import ShareVKIcon from "../../assets/common/svgs/share-vk.svg"
import ShareTelegramIcon from "../../assets/common/svgs/share-telegram.svg"
import squircle from "../../assets/common/squircle.svg"
import squircleFilled from "../../assets/common/squircle-filled.svg"
import wormAnimationData from "../../assets/glossary/worm.json"

export const Cards = ({ children }) => {
  return (
    <Masonry
      breakpointCols={4}
      className={styles.cardGrid}
      columnClassName={styles.cardGridColumn}
    >
      {children}
    </Masonry>
  )
}

export const Card = ({ tags, title, description, linkText, linkURL }) => {
  const animationElementRef = useRef()

  // useEffect(() => {
  //   const animation = lottie.loadAnimation({
  //     container: animationElementRef.current,
  //     renderer: "svg",
  //     loop: true,
  //     autoplay: false,
  //     animationData: wormAnimationData,
  //   })
  //
  //   return () => {
  //     animation.destroy()
  //   }
  // }, [])

  return (
    <CardBody>
      <CardImage>
        <PlaceholderImage />
        <CardAnimation ref={animationElementRef} />
      </CardImage>
      <CardContent>
        <CardTags>
          {tags.map((tag) => (
            <CardTag key={tag}> {/* TODO: id */}
              {tag}
            </CardTag>
          ))}
        </CardTags>
        <CardTextContent>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
          <CardLink href={linkURL}>
            <CardLinkIcon>
              <LinkIcon />
            </CardLinkIcon>
            {linkText}
          </CardLink>
        </CardTextContent>
        <CardShareButtons initialExpanded="share">
          <CardShareButton name="share" icon={<ShareLinkIcon />}>Поделиться</CardShareButton>
          <CardShareButton name="facebook" icon={<ShareFacebookIcon />}>Шернуть</CardShareButton>
          <CardShareButton name="twitter" icon={<ShareTwitterIcon />}>Твитнуть</CardShareButton>
          <CardShareButton name="vk" icon={<ShareVKIcon />}>Вкнуть</CardShareButton>
          <CardShareButton name="telegram" icon={<ShareTelegramIcon />}>Отправить</CardShareButton>
        </CardShareButtons>
      </CardContent>
    </CardBody>
  )
}

const CardBody = styled.div`
  background:
    linear-gradient(var(--gray-90), var(--gray-90)) padding-box,
    var(--border-gradient) border-box;
  border: 0.125em solid transparent;
  
  border-radius: 1.75em;
`

const CardImage = styled.div`
  border: 0.0625em solid var(--gray-70);
  border-radius: 1.375em;
  
  margin: 0.375em 0.375em 0;
  
  overflow: hidden;
  
  position: relative;

  svg {
    width: 100%;
    height: 100%;
    
    display: block;
  }
`

const CardAnimation = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`

const CardContent = styled.div`
  margin: 1.25em 1.125em 1.125em 1.125em;
`

const CardTags = styled.div`
  display: flex;
  gap: 0.5em;
`

const CardTag = styled.div`
  ${textStyles.caption.S}
  
  color: var(--gray-30);
  background: var(--gray-70);
  
  border-radius: 0.5em;
  
  height: 1.666em;
  padding: 0.083em 0.666em 0;
  
  display: flex;
  align-items: center;
`

const CardTextContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5em;
  
  margin: 0.75em 0 1em;
`

const CardTitle = styled.div`
  ${textStyles.header.M}
  
  font-family: "Roboto", sans-serif;
  
  color: var(--gray-20);
`

const CardDescription = styled.div`
  ${textStyles.text.S}
  
  color: var(--gray-20);
`

const CardLink = styled.a`
  ${textStyles.caption.S}
  
  color: var(--gray-30);
  
  text-decoration: none;
  
  &:hover {
    color: var(--gray-40);
  }
  
  &:active {
    color: var(--gray-50);
  }
`

const CardLinkIcon = styled.div`
  width: 1.333em;
  height: 1.333em;
  
  margin-right: 0.2em;
  
  display: inline-block;
  vertical-align: top;
  
  svg {
    width: 100%;
    height: 100%;
  }
    
  ${CardLink}:not(:hover) & svg #circle {
    color: var(--gray-40);
  }
`

const CardShareButtonsContext = createContext({
  onHover: () => {},
})

const CardShareButtons = ({ initialExpanded, children }) => {
  const [expanded, setExpanded] = useState(initialExpanded)

  const setExpandedDelayed = useCallback(debounce(throttle(setExpanded, 200), 80), [])

  const handleMouseLeave = () => {
    setExpandedDelayed(initialExpanded)
  }

  return (
    <CardShareButtonsContext.Provider value={{
      expanded,
      setExpanded: setExpandedDelayed,
    }}>
      <CardShareButtonsBody onMouseLeave={handleMouseLeave}>
        {children}
      </CardShareButtonsBody>
    </CardShareButtonsContext.Provider>
  )
}

const CardShareButtonsBody = styled.div`
  display: flex;
  gap: 0.25em;
`

const CardShareButton = ({ name, icon, children }) => {
  const { expanded, setExpanded } = useContext(CardShareButtonsContext)

  const isExpanded = name === expanded

  const handleMouseEnter = () => {
    setExpanded(name)
  }

  return (
    <CardShareButtonBody isExpanded={isExpanded} onMouseEnter={handleMouseEnter}>
      <CardShareButtonContent>
        <CardShareButtonIcon>
          {icon}
        </CardShareButtonIcon>
        <CardShareButtonLabel isExpanded={isExpanded}>
          {children}
        </CardShareButtonLabel>
      </CardShareButtonContent>
    </CardShareButtonBody>
  )
}

const CardShareButtonBody = styled.button`
  --duration: 0.2s;
  --button-size: 1.75em;
  --button-size-expanded: 7.25em;
  --icon-size: 1em;

  font-size: inherit;
  font-family: inherit;
  background: none;
  
  cursor: pointer;
  
  color: var(--gray-30);

  border-image-source: url(${squircle});
  border-image-slice: 10 fill;
  border-image-width: 0.5625em;
  border-style: solid;
  border-width: 1px;
  border-color: transparent;
  
  overflow: hidden;
  
  display: flex;
  align-items: center;
  
  padding: 0 calc((var(--button-size) - var(--icon-size)) / 2 - 1px);
  
  transition: width var(--duration);
  
  width: var(--button-size);
  height: var(--button-size);
  
  ${props => props.isExpanded && `
    width: var(--button-size-expanded);
  `}
  
  &:active {
    border-image-source: url(${squircleFilled});
  }
`

const CardShareButtonContent = styled.div`
  display: flex;
  align-items: center;
  gap: 0.15em;
  
  margin: 0 auto;
`

const CardShareButtonIcon = styled.div`
  display: flex;

  width: var(--icon-size);
  height: var(--icon-size);
  
  svg {
    width: 100%;
    height: 100%;
  }
`

const CardShareButtonLabel = styled.div`
  ${textStyles.caption.S}
  
  transition: opacity var(--duration), visibility var(--duration);
  
  opacity: 0;
  visibility: hidden;
  
  ${props => props.isExpanded && `
    opacity: 1;
    visibility: visible;
  `}
`

export default Card

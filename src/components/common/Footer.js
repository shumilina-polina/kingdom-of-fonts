import React, { useState } from "react"
import styled from "styled-components"

import textStyles from "./text"

import { TextHighlightStyle } from "./TextHighlight"

export const SocialLinks = ({ icons }) => {
  const links = [
    {id: "telegram", url: "https://t.me/andreypavlushin"},
    {id: "behance", url: "https://www.behance.net/pavlushin"},
    {id: "instagram", url: "https://www.instagram.com/pavlushin.design/"},
    {id: "pinterest", url: "https://www.pinterest.co.uk/andrepavlushin"},
  ]

  return (
    <SocialLinksWrapper>
      <Title>А ещё мы тут:</Title>
      <SocialLinksContainer>
        {links.map((link) => icons[link.id] && (
          <SocialLink key={link.id} href={link.url} target="_blank" rel="noopener noreferrer">
            {icons[link.id]}
          </SocialLink>
        ))}
      </SocialLinksContainer>
    </SocialLinksWrapper>
  )
}

export const Navigation = () => {
  return (
    <NavigationWrapper>
      <NavigationLink>
        Бюро
      </NavigationLink>
      <NavigationLink>
        Мастерская
      </NavigationLink>
      <NavigationLink
        href="https://fonts.pavlushin.design/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Шрифтотека
      </NavigationLink>
      <NavigationLink
        href="https://pavlushin.design/blog/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Блог
      </NavigationLink>
    </NavigationWrapper>
  )
}

export const Credits = ({authors, shorten}) => {
  return (
    <CreditsWrapper>
      <Title>В главных ролях:</Title>
      <Authors>
        {authors.map((author, i) => (
          <Author key={i}>
            <AuthorName href={author.url} target="_blank" rel="noopener noreferrer">
              {shorten && author.nameShort ? author.nameShort : author.name}
            </AuthorName>
            <AuthorRole>{author.role}</AuthorRole>
          </Author>
        ))}
      </Authors>
    </CreditsWrapper>
  )
}

export const DesignedAt = () => {
  return (
    <DesignedAtWrapper>
      <div>
        Директор орат, <br />
        дизанер кнопки нажимат!
      </div>
      <div>
        © Мастерская КБ
      </div>
    </DesignedAtWrapper>
  )
}

export const Copyright = () => {
  return (
    <CopyrightWrapper>
      <div>→2019</div>
      <div>2022 ©</div>
    </CopyrightWrapper>
  )
}

export const Announce = ({ image, children }) => {
  return (
    <AnnounceWrapper href="https://t.me/andreypavlushin" target="_blank" rel="noopener noreferrer">
      <AnnouncementImageWrapper>
        {image}
      </AnnouncementImageWrapper>
      <AnnouncementContent>
        <AnnouncementTitle>Нью</AnnouncementTitle>
        <AnnouncementText>
          <AnnouncementTextMain>{children}</AnnouncementTextMain>
          <AnnouncementTextHighlight>подпишись</AnnouncementTextHighlight>
        </AnnouncementText>
      </AnnouncementContent>
    </AnnounceWrapper>
  )
}

export const Errata = ({ url, email }) => {
  const [hasCopied, setHasCopied] = useState(false)

  const onEmailClick = () => {
    navigator.clipboard.writeText(email)
      .then(() => {
        setHasCopied(true)
      })
  }

  return (
    <ErrataWrapper>
      <ErrataBoxShadow />
      <ErrataBox
        href={url}
        target="_blank"
        rel="noopener noreferrer"
      >
        <ErrataBlurredLight />
        <ErrataContent>
          <ErrataTextTop>Ребята, у вас Эррата!</ErrataTextTop>
          <ErrataTextBig>
            Вопросики,<br />
            предложения,<br />
            баги и косяки,<br />
            сотрудничество:
          </ErrataTextBig>
          <ErrataTelegramButton>
            <ErrataTelegramButtonBody />
            <ErrataTelegramButtonContent>
              Телеграмировать!
            </ErrataTelegramButtonContent>
          </ErrataTelegramButton>
        </ErrataContent>
      </ErrataBox>
      <ErrataTextBottom underlineLinks={!hasCopied}>
        {!hasCopied
          ? <>или <a onClick={onEmailClick}>отправить@голубей</a></>
          : <a onClick={onEmailClick}>Адрес скопирован :3</a>
        }
      </ErrataTextBottom>
    </ErrataWrapper>
  )
}

export const Footer = styled.div`
  position: relative;
  
  display: grid;
  grid-template: repeat(4, auto) / auto auto;
  gap: 1.25em;
  
  color: var(--graphite-70);

  padding: 2em 1.75em;
  border-top: 0.1em solid var(--graphite-90);
  
  @media (min-width: 1090px) {
    grid-template: 1fr 1fr / repeat(5, auto);
    gap: 0;
    justify-content: space-between;
    
    padding: 2.5em 0 0 0;
    margin-bottom: 4.5em;
  
    height: 20.25em;
  }
`

const Title = styled.div`
  ${textStyles.tag.M}
  
  margin-bottom: 1.75em;
`

const Link = styled.a`
  ${textStyles.item.S}
  
  color: var(--graphite-60);
  
  padding: 0.125em 0;
  
  border-radius: 0.25em;
  
  text-decoration: none;
  
  @media (min-width: 1090px) {
    padding: 0.125em 0.375em;
  
    &:hover {
      background-color: var(--graphite-80);
    }
    
    &:active {
      color: var(--graphite-70);
    }
  }
`

const SocialLinksWrapper = styled.div`
  grid-column: 1 / 3;
  grid-row: 2 / 3;
  
  @media (min-width: 1090px) {
    grid-column: 1 / 2;
    grid-row: 1 / 2;
  }
`

const SocialLinksContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 0.6em;
  
  margin-top: -0.3em;
  margin-bottom: 0.8em;
  
  @media (min-width: 1090px) {
    gap: 1em;
    
    margin-top: 0;
    margin-bottom: auto;
  }
`

const SocialLink = ({ children, ...otherProps }) => {
  return (
    <SocialLinkWrapper {...otherProps}>
      <SocialLinkIcon>
        {children}
      </SocialLinkIcon>
    </SocialLinkWrapper>
  )
}

const SocialLinkWrapper = styled.a`
  position: relative;

  width: 1.5em;
  height: 1.5em;
  
  &::after {
    content: "";
    
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
  
  @media (min-width: 1090px) {
    width: 2.5em;
    height: 2.5em;
  }
`

const SocialLinkIcon = styled.div`
  width: 100%;
  height: 100%;
  
  transition: 0.1s transform;
  
  @media (min-width: 1090px) {
    ${SocialLinkWrapper}:hover & {
      transform: translateY(-20%);
    }
  }
`

const NavigationWrapper = styled.div`
  display: none;
  
  @media (min-width: 1090px) {
    grid-column: 1 / 2;
    grid-row: 2 / 3;
  
    align-self: end;
    
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.25em;
  }
`

const NavigationLink = styled(Link)`
  cursor: pointer;
  
  :hover:not([href]) {
    cursor: not-allowed;
    background: none;
    user-select: none;
  }
  
  :active:not([href]) {
    color: var(--graphite-60);
  }
`

const CreditsWrapper = styled.div`
  grid-column: 1 / 3;
  grid-row: 1 / 2;
  
  @media (min-width: 1090px) {
    grid-column: 3 / 4;
    grid-row: 1 / 2;
  }
`

const Authors = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75em;
  
  margin-bottom: auto;

  @media (min-width: 1090px) {
    gap: 0.25em;
  }
`

const Author = styled.div`
  display: flex;
  flex-direction: column;
  
  margin: -0.125em 0;

  @media (min-width: 1090px) {
    flex-direction: row;
    align-items: center;
    
    margin: 0;
  }
`

const AuthorName = styled(Link)`

`

const AuthorRole = styled.div`
  ${textStyles.item.S}
  
  padding: 0.125em 0;
  
  @media (min-width: 1090px) {
    padding: 0.125em 0.375em;
  }
`

const DesignedAtWrapper = styled.div`
  ${textStyles.item.S}
  
  grid-column: 1 / 2;
  grid-row: 4 / 5;
  
  display: flex;
  flex-direction: column;
  gap: 0.875em;
  
  @media (min-width: 1090px) {
    ${textStyles.text.S}
    
    line-height: 1.25em !important;
  
    grid-column: 3 / 4;
    grid-row: 2 / 3;
    
    align-self: end;
  }
`

const AnnounceWrapper = styled.a`
  font-size: 0.58em;

  font-family: "Roboto", sans-serif;
  font-weight: 400;
  
  width: 16.25em;
  height: 16.25em;
  
  text-decoration: none;
  
  transform: rotate(9.9deg);
  
  overflow: hidden;
  
  position: absolute;
  top: 4.5em;
  right: 2em;
  
  @media (min-width: 1090px) {
    font-size: 1em;
  
    grid-column: 2 / 3;
    grid-row: 1 / 3;
    
    align-self: center;
  
    position: relative;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
`

const AnnouncementImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  
  transition: 0.5s transform;

  @media (min-width: 1090px) {
    ${AnnounceWrapper}:hover & {
      transform: rotate(45deg);
    }
  }
`

const AnnouncementContent = styled.div`
  font-size: 105%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  position: absolute;
  top: 0;
  left: 0;
  
  width: 100%;
  height: 100%;
  
  transition: 0.1s transform;

  @media (min-width: 1090px) {
    font-size: 100%;
  
    ${AnnounceWrapper}:hover & {
      transform: scale(106%);
    }
    
    ${AnnounceWrapper}:active & {
      transform: scale(100%);
    }
  }
`

const AnnouncementTitle = styled.div`
  ${TextHighlightStyle}

  text-align: center;
  font-weight: normal;
  font-size: 2.375em;
  text-transform: uppercase;
`

const AnnouncementText = styled.div`
  text-align: center;
  font-size: 1.25em;
  color: white;
  padding: 0 1em;
  
  display: flex;
  flex-direction: column;
  align-items: center;
`

const AnnouncementTextMain = styled.div`

`

const AnnouncementTextHighlight = styled.div`
  text-decoration: underline;

  ${TextHighlightStyle}
`

const ErrataWrapper = styled.div`
  grid-column: 1 / 3;
  grid-row: 3 / 4;

  font-family: "Roboto", sans-serif;
  font-weight: 400;
  
  color: #797B7B;

  position: relative;
  
  height: 100%;
  
  @media (min-width: 1090px) {
    grid-column: 4 / 5;
    grid-row: 1 / 3;
  }
`

const ErrataBox = styled.a`
  text-decoration: none;
  color: inherit;
    
  @media (min-width: 1090px) {
    display: block;
  
    padding: 1em;
  
    width: 15.9em;
    height: 15em;
  
    background-color: #151515;
    box-shadow: inset 0 0 3.125em rgba(255, 255, 255, 0.06);
    border-radius: 1em;
    
    transform: skewX(-9deg) scaleX(0.98);
    
    overflow: hidden;
    
    position: relative;
    z-index: 0;
    
    transition: 0.3s transform;
    
    &:hover {
      transform: skewX(-9deg) scaleX(0.98) translate(-5%, -5%);
    }
    
    &:active {
      transform: skewX(-9deg) scaleX(0.98);
    }
  }
`

const ErrataBoxShadow = styled.div`
  display: none;

  @media (min-width: 1090px) {
    display: block;
  
    position: absolute;
    top: 0;
    left: 0;
  
    width: 15.6em;
    height: 14.7em;
    
    transform: skewX(-9deg) translate(1em, 3em);
  
    border-radius: 1em;
    border: 0.125em solid rgba(255, 255, 255, 0.08);
  }
`

const ErrataBlurredLight = styled.div`
  display: none;

  @media (min-width: 1090px) {
    display: block;
  
    position: absolute;
    
    top: -5.8em;
    right: -7em;
    
    width: 12.5em;
    height: 12.5em;
    
    border-radius: 9999px;
    
    background: radial-gradient(
      75.21% 94.6% at 41.95% 112.84%,
      rgba(244, 248, 93, 0.48) 0%,
      rgba(253, 142, 184, 0.48) 33.29%,
      rgba(198, 231, 69, 0.1) 92.71%)
    ;
    filter: blur(2em);
    transform: rotate(-73.81deg);
    
    transition: 0.3s transform;
    
    ${ErrataBox}:hover & {
      transform: translate(-3em, 1.3em) rotate(-73.81deg);
    }
  }
`

const ErrataContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: start;

  @media (min-width: 1090px) {
    flex-direction: column;
  }
`

const ErrataTextTop = styled.div`
  display: none;

  @media (min-width: 1090px) {
    display: block;
    
    margin-bottom: 0.3em;
  }
`

const ErrataTextBig = styled.div`
  @media not screen and (min-width: 1090px) {
    ${textStyles.item.S}
    font-family: "Manrope", sans-serif;
  }
  
  @media (min-width: 1090px) {
    font-size: 1.8em;
    line-height: 1.06em;
    
    color: white;
  }
`

const ErrataTelegramButton = styled.div`
  font-size: 65%;

  display: block;
  position: relative;
  
  width: 13.5em;
  height: 3em;
  
  text-decoration: none;
  
  transform: skewX(-9deg) scaleX(0.98);
  
  @media (min-width: 1090px) {
    font-size: 100%;
    
    align-self: center;
    margin-top: 0.75em;
    
    transform: none;
  }
`

const ErrataTelegramButtonBody = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  border: 0.125em solid transparent;
  border-radius: 0.4em;
  
  background:
    linear-gradient(var(--graphite-100), var(--graphite-100)) padding-box,
    var(--accent) border-box;
`

const ErrataTelegramButtonContent = styled.div`
  ${TextHighlightStyle}
  
  background-image: var(--accent);

  position: relative;
  width: 100%;
  height: 100%;
  
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 1.25em;
  font-weight: 500;
  letter-spacing: 0.03rem;
  font-variant: small-caps;
  text-transform: lowercase;
`

const ErrataTextBottom = styled.div`
  @media not screen and (min-width: 1090px) {
    font-size: 0.75em;
    line-height: 0.83em;
    
    right: 0;
    bottom: 0;
  }
  
  position: absolute;
  width: 12em;

  text-align: center;
  
  transform: skewX(-9deg) scaleX(0.98);
  
  a {
    cursor: pointer;
    color: inherit;
    
    ${props => props.underlineLinks && `
      text-decoration: underline;
    `}
  }
  
  a:hover {
    text-decoration: none;
  }
  
  @media (min-width: 1090px) {
    left: 1.4em;
    bottom: 1em;
  }
`

const CopyrightWrapper = styled.div`
  ${textStyles.item.S}
  
  grid-column: 2 / 3;
  grid-row: 4 / 5;
  
  align-self: end;
  
  font-weight: 400 !important;
  text-align: right;
  
  @media (min-width: 1090px) {
    // TODO
    ${textStyles.text.S}
    
    line-height: 1.25em !important;
    letter-spacing: 0 !important;
  
    grid-column: 5 / 6;
    grid-row: 2 / 3;
  }
`

export default Footer

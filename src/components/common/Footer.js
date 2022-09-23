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
    <>
      <Title>А ещё мы тут:</Title>
      <SocialLinksWrapper>
        {links.map((link) => icons[link.id] && (
          <SocialLink key={link.id} href={link.url} target="_blank" rel="noopener noreferrer">
            {icons[link.id]}
          </SocialLink>
        ))}
      </SocialLinksWrapper>
    </>
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
    <>
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
    </>
  )
}

export const DesignedAt = () => {
  return (
    <DesignedAtWrapper>
      <Text>
        Директор орат, <br />
        дизанер кнопки нажимат!
      </Text>
      <Text>
        © Мастерская КБ
      </Text>
    </DesignedAtWrapper>
  )
}

export const Copyright = () => {
  return (
    <CopyrightWrapper>
      →2019<br />
      2022 ©
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
  
  display: flex;
  justify-content: space-between;
  
  color: var(--graphite-70);

  padding-top: 2.5em;
  margin-bottom: 4.5em;
  border-top: 0.1em solid var(--graphite-90);
  
  height: 20.25em;
`

export const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`

export const LinksFooterColumn = styled(FooterColumn)`

`

export const AnnounceFooterColumn = styled(FooterColumn)`
  justify-content: center;
`

export const CreditsFooterColumn = styled(FooterColumn)`

`

export const ErrataFooterColumn = styled(FooterColumn)`

`

export const CopyrightFooterColumn = styled(FooterColumn)`
  justify-content: flex-end;
`

const Title = styled.div`
  ${textStyles.tag.M}
  
  margin-bottom: 1.75em;
`

const Link = styled.a`
  ${textStyles.item.S}
  
  color: var(--graphite-60);
  
  padding: 0.125em 0.375em;
  
  border-radius: 0.25em;
  
  text-decoration: none;
  
  &:hover {
    background-color: var(--graphite-80);
  }
  
  &:active {
    color: var(--graphite-70);
  }
`

const Text = styled.div`
  ${textStyles.text.S}
  
  line-height: 1.25em;
`

const SocialLinksWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 1em;
  
  margin-bottom: auto;
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

  width: 2.5em;
  height: 2.5em;
  
  &::after {
    content: "";
    
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
`

const SocialLinkIcon = styled.div`
  width: 100%;
  height: 100%;
  
  transition: 0.1s transform;
  
  ${SocialLinkWrapper}:hover & {
    transform: translateY(-20%);
  }
`

const NavigationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.25em;
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

const Authors = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25em;
  
  margin-bottom: auto;
`

const Author = styled.div`
  display: flex;
  align-items: center;
`

const AuthorName = styled(Link)`

`

const AuthorRole = styled.div`
  ${textStyles.item.S}
  
  padding: 0.125em 0.375em;
`

const DesignedAtWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.875em;
`

const AnnounceWrapper = styled.a`
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  
  position: relative;
  
  width: 16.25em;
  height: 16.25em;
  
  text-decoration: none;
  
  transform: rotate(9.9deg);
  
  overflow: hidden;
`

const AnnouncementImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  
  transition: 0.5s transform;

  ${AnnounceWrapper}:hover & {
    transform: rotate(45deg);
  }
`

const AnnouncementContent = styled.div`
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

  ${AnnounceWrapper}:hover & {
    transform: scale(106%);
  }
  
  ${AnnounceWrapper}:active & {
    transform: scale(100%);
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
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  
  color: #797B7B;

  position: relative;
  
  height: 100%;
`

const ErrataBox = styled.a`
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
  
  text-decoration: none;
  color: inherit;
  
  transition: 0.3s transform;
  
  &:hover {
    transform: skewX(-9deg) scaleX(0.98) translate(-5%, -5%);
  }
  
  &:active {
    transform: skewX(-9deg) scaleX(0.98);
  }
`

const ErrataBoxShadow = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  width: 15.6em;
  height: 14.7em;
  
  transform: skewX(-9deg) translate(1em, 3em);

  border-radius: 1em;
  border: 0.125em solid rgba(255, 255, 255, 0.08);
`

const ErrataBlurredLight = styled.div`
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
`

const ErrataContent = styled.div`
  display: flex;
  flex-direction: column;
`

const ErrataTextTop = styled.div`
  margin-bottom: 0.3em;
`

const ErrataTextBig = styled.div`
  font-size: 1.8em;
  line-height: 1.06em;
  
  color: white;
`

const ErrataTelegramButton = styled.div`
  align-self: center;

  display: block;
  position: relative;
  
  width: 13.5em;
  height: 3em;
  
  margin-top: 0.75em;
  
  text-decoration: none;
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
  position: absolute;
  left: 1.4em;
  bottom: 1em;
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
`

const CopyrightWrapper = styled.div`
  ${textStyles.text.S}
  
  line-height: 1.25em;
  letter-spacing: 0;
  font-weight: 400;
  
  text-align: right;
`

export default Footer

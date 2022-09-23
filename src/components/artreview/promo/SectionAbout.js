import React from "react"
import styled from "styled-components"

import { HoverArea, SingleFrameAtlas } from "../../common/Atlas"
import { TextBase, TextHighlight } from "../../common/TextHighlight"
import Section from "./Section"

import textStyles from "../../common/text"

import photo from "../../../assets/artreview/photo.jpg"
import behanceIdle from "../../../assets/artreview/social/behance-idle.png"
import behanceHover from "../../../assets/artreview/social/behance-hover.png"
import behanceClick from "../../../assets/artreview/social/behance-click.png"
import pinterestIdle from "../../../assets/artreview/social/pinterest-idle.png"
import pinterestHover from "../../../assets/artreview/social/pinterest-hover.png"
import pinterestClick from "../../../assets/artreview/social/pinterest-click.png"
import telegramIdle from "../../../assets/artreview/social/telegram-idle.png"
import telegramHover from "../../../assets/artreview/social/telegram-hover.png"
import telegramClick from "../../../assets/artreview/social/telegram-click.png"
import Frame from "../../../assets/artreview/svgs/photo-frame.svg"
import Squiggle from "../../../assets/artreview/svgs/squiggle-left.svg"
import Eye from "../../../assets/common/svgs/eye.svg"
import Document from "../../../assets/common/svgs/document.svg"
import Group from "../../../assets/common/svgs/group.svg"

const SectionAbout = () => {
  return (
    <Section>
      <Body>
        <Content>
          <Text>
            <TextHighlight>
              Привет! Меня зовут Андрей Павлушин,<br />
              я арт-директор КБ Павлушина и школы Гранич.{" "}
            </TextHighlight>
            На артдирекшене разбираю макеты,<br />
            делюсь опытом и помогаю делать проекты,<br />
            которые не стыдно положить в портфолио,<br />
            показать заказчику или на собесе.
          </Text>
          <Links>
            <Link
              as="a"
              href="https://www.behance.net/pavlushin"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkIcon>
                <SingleFrameAtlas
                  idle={<LinkImage src={behanceIdle} />}
                  hover={<LinkImage src={behanceHover} />}
                  click={<LinkImage src={behanceClick} />}
                />
              </LinkIcon>
              <LinkContent>
                <LinkText>Портфолио<br />на Бехансе</LinkText>
                <LinkStat>
                  <LinkStatIcon><Eye /></LinkStatIcon>
                  <LinkStatText>82 771</LinkStatText>
                </LinkStat>
              </LinkContent>
            </Link>
            <Link
              as="a"
              href="https://www.pinterest.co.uk/andrepavlushin/артдирекшен-работы/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkIcon>
                <SingleFrameAtlas
                  idle={<LinkImage src={pinterestIdle} />}
                  hover={<LinkImage src={pinterestHover} />}
                  click={<LinkImage src={pinterestClick} />}
                />
              </LinkIcon>
              <LinkContent>
                <LinkText>Проекты<br />учеников</LinkText>
                <LinkStat>
                  <LinkStatIcon><Document /></LinkStatIcon>
                  <LinkStatText>259</LinkStatText>
                </LinkStat>
              </LinkContent>
            </Link>
            <Link
              as="a"
              href="https://t.me/andreypavlushin"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkIcon>
                <SingleFrameAtlas
                  idle={<LinkImage src={telegramIdle} />}
                  hover={<LinkImage src={telegramHover} />}
                  click={<LinkImage src={telegramClick} />}
                />
              </LinkIcon>
              <LinkContent>
                <LinkText>Блог<br />команды</LinkText>
                <LinkStat>
                  <LinkStatIcon><Group /></LinkStatIcon>
                  <LinkStatText>641</LinkStatText>
                </LinkStat>
              </LinkContent>
            </Link>
          </Links>
        </Content>
        <Photo>
          <PhotoFrame />
          <PhotoImageWrapper>
            <PhotoImage src={photo} />
          </PhotoImageWrapper>
        </Photo>
        <SquiggleLeft />
        <SquiggleRight />
      </Body>
    </Section>
  )
}

const Body = styled.div`
  position: relative;
  
  height: 25em;
`

const Content = styled.div`
  padding: 2.75em 33em 2.2em 9.9em;
  
  height: 100%;
  
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const Text = styled(TextBase)`
  ${textStyles.text.L}
  
  color: var(--graphite-50);
`

const Links = styled.div`
  display: flex;
  gap: 2em;
`

const Link = styled(HoverArea)`
  display: flex;
  gap: 0.75em;
  align-items: flex-start;

  cursor: pointer;
  text-decoration: none;
`

const LinkIcon = styled.div`
  width: 2.5em;
  height: 2.5em;
`

const LinkContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4375em;
`

const LinkText = styled.div`
  color: var(--graphite-60);

  font-weight: 600;
  font-size: 1.125em;
  line-height: 1em;
  letter-spacing: 0.02em;
  text-decoration: underline;
  
  ${Link}:hover & {
    text-decoration: none;
  }
`

const LinkStat = styled.div`
  color: var(--graphite-70);
  
  display: flex;
  align-items: center;
  gap: 0.25em;
`

const LinkStatIcon = styled.div`
  width: 1em;
  height: 1em;
`

const LinkStatText = styled.div`
  ${textStyles.item.M}
`

const LinkImage = styled.img`
  width: 100%;
`

const Photo = styled.div`
  width: 23.8em;
  
  position: absolute;
  top: 1em;
  right: 10em;
`

const PhotoFrame = styled(Frame)`
  width: 100%;
  height: 100%;
  
  position: relative;
  z-index: 2;
`

const PhotoImageWrapper = styled.div`
  position: absolute;
  top: 12.5%;
  right: 11.3%;
  z-index: 1;
  
  width: 54%;
  height: 75%;
  
  overflow: hidden;
`

const PhotoImage = styled.img`
  position: absolute;
  top: -17%;
  right: -37%;
  
  width: 176%;
`

const SquiggleLeft = styled(Squiggle)`
  position: absolute;
  top: 0;
  left: 0;
  
  height: 100%;
`

const SquiggleRight = styled(Squiggle)`
  position: absolute;
  top: 0;
  right: 0;
  
  height: 100%;
  
  transform: scaleX(-1);
`

export default SectionAbout

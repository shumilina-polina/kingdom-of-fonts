import React from "react"
import styled from "styled-components"

import { TextBase, TextHighlight } from "../../common/TextHighlight"
import FlipBook from "../../common/FlipBook"
import Section from "./Section"
import SectionHeader from "./SectionHeader"
import { usePageData } from "../../../context/PageDataContext"

import textStyles from "../../common/text"

import chatBase from "../../../assets/artreview/process-chat-base.png"
import chat1 from "../../../assets/artreview/process-chat-1.png"
import chat2 from "../../../assets/artreview/process-chat-2.png"
import chat3 from "../../../assets/artreview/process-chat-3.png"
import chat4 from "../../../assets/artreview/process-chat-4.png"
import _Calendar from "../../../assets/artreview/svgs/process-calendar.svg"
import Star from "../../../assets/artreview/svgs/process-star.svg"
import Icon1 from "../../../assets/artreview/svgs/process-icon-1.svg"
import Icon2 from "../../../assets/artreview/svgs/process-icon-2.svg"
import Icon3 from "../../../assets/artreview/svgs/process-icon-3.svg"

const SectionProcess = () => {
  const pageData = usePageData()
  const yearMonth = pageData.data && pageData.data.year_month

  return (
    <Section>
      <SectionHeader>Процесс</SectionHeader>
      <Blocks>
        <Block1>
          <Image>
            <FlipBook
              frameCount={5}
              defaultFrame={4}
              render={(frame) => (
                <Chat frame={frame} />
              )}
            />
          </Image>
          <Content>
            <ContentHeader>Записываешься на Артдирекшен</ContentHeader>
            <ContentText>
              <TextHighlight>
                Я добавляю тебя в закрытый телеграм-чат{" "}
              </TextHighlight>
              Артдирекшена, вся движуха, наше общение и&nbsp;видеоразборы проходят там.
            </ContentText>
            <ContentFooter>
              <ContentFooterImage><Icon1 /></ContentFooterImage>
              <ContentFooterText>
                Чат групповой, в нём есть другие<br />
                касатики, которые тоже записались.<br />
                Все свои, хорошие :3
              </ContentFooterText>
            </ContentFooter>
          </Content>
        </Block1>
        <Block2>
          <Image>
            <FlipBook
              frameCount={9}
              defaultFrame={8}
              render={(frame) => (
                <Calendar
                  month={yearMonth && yearMonth.month_display}
                  year={yearMonth && yearMonth.year}
                  frame={frame}
                />
              )}
            />
          </Image>
          <Content>
            <ContentHeader>Отправляешь работу на разборы</ContentHeader>
            <ContentText>
              <TextHighlight>
                Два раза в неделю, во вторник и пятницу,{" "}
              </TextHighlight>
              смотрю все работы, которые скинули в чат,
              записываю и публикую общий видеоразбор.
            </ContentText>
            <ContentFooter>
              <ContentFooterImage><Icon2 /></ContentFooterImage>
              <ContentFooterText>
                Одно условие: чтобы работа попала<br />
                на разбор, её нужно прислать в чат<br />
                до 20:00 мск в день разбора.
              </ContentFooterText>
            </ContentFooter>
          </Content>
        </Block2>
        <Block3>
          <Image>
            <Star />
            <VideoWrapper />
          </Image>
          <Content>
            <ContentHeader>Смотришь видеоразборы</ContentHeader>
            <ContentText>
              <TextHighlight>
                На разборе комментирую работы,{" "}
              </TextHighlight>
              объясняю как исправить ошибки, улучшить вёрстку, доработать идею и оптимизировать текст.
            </ContentText>
            <ContentFooter>
              <ContentFooterImage><Icon3 /></ContentFooterImage>
              <ContentFooterText>
                Формат разбора — видеоролик<br />
                на Ютубе от 45 до 60 минут, с таймкодами,<br />
                по закрытой ссылке только для чата.
              </ContentFooterText>
            </ContentFooter>
          </Content>
        </Block3>
      </Blocks>
    </Section>
  )
}

const Blocks = styled.div`

`

const ContentHeader = styled.div`
  ${textStyles.header.L}
`

const ContentText = styled(TextBase)`
  ${textStyles.text.L}
  
  color: var(--graphite-50);
  margin: 1em 0 1.2em 0;
  width: 85%;
`

const ContentFooter = styled.div`
  display: flex;
  align-items: center;
  gap: 1em;

  height: 4.5em;
`

const ContentFooterImage = styled.div`
  width: 4.5em;
  height: 100%;
  
  svg {
    width: 100%;
    height: 100%;
  }
`

const ContentFooterText = styled.div`
  ${textStyles.item.S}
  
  color: var(--graphite-50);
`

const Image = styled.div`
  display: flex;
  align-items: flex-end;
  
  position: relative;
`

const Block = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`

const Block1 = styled(Block)`
  ${Image} {
    width: 29.1em;
    
    margin-left: 2em;
    margin-bottom: 0.5em;
  }
  
  ${ContentFooterImage} {
    width: 5.125em;
  }
`

const Block2 = styled(Block)`
  ${Image} {
    width: 28.5em;
    
    margin-left: 2em;
  }
`

const Block3 = styled(Block)`
  ${Image} {
    width: 34.375em;
  }
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  
  width: 50%;
  
  padding: 7em 0;
  
  ${Block}:not(:last-child) & {
    border-bottom: 0.1em solid var(--graphite-80);
  }
`

const Chat = ({ frame }) => {
  return (
    <ChatWrapper>
      <ChatBase src={chatBase} alt="" />
      <ChatBubble1 src={chat1} alt="" isHidden={frame < 1} />
      <ChatBubble2 src={chat2} alt="" isHidden={frame < 2} />
      <ChatBubble3 src={chat3} alt="" isHidden={frame < 3} />
      <ChatBubble4 src={chat4} alt="" isHidden={frame < 4} />
    </ChatWrapper>
  )
}

const ChatWrapper = styled.div`
  position: relative;
  
  width: 100%;
  height: 100%;
  
  display: flex;
  align-items: flex-end;
`

const ChatBase = styled.img`
  width: 100%;
`

const ChatBubble = styled.img`
  position: absolute;
  
  pointer-events: none;
  
  opacity: 1;
  transition: 0.1s opacity;
  
  ${props => props.isHidden && `
    opacity: 0;
  `}
`

const ChatBubble1 = styled(ChatBubble)`
  bottom: 13.8em;
  left: 9.4em;
  
  width: 13.6em;
`

const ChatBubble2 = styled(ChatBubble)`
  bottom: 10.8em;
  left: 0.4em;
  
  width: 13.375em;
`

const ChatBubble3 = styled(ChatBubble)`
  bottom: 8.7em;
  left: 14.2em;
  
  width: 13.5em;
`

const ChatBubble4 = styled(ChatBubble)`
  bottom: 0;
  left: 3.8em;
  
  width: 12em;
`

const Calendar = ({ month, year, frame }) => {
  return (
    <CalendarWrapper>
      <CalendarImage frame={frame} />
      <CalendarMonth>{month}</CalendarMonth>
      <CalendarYear>{year}</CalendarYear>
    </CalendarWrapper>
  )
}

const CalendarWrapper = styled.div`
  position: relative;
  
  color: var(--graphite-70);
`

const CalendarImage = styled(_Calendar)`
  width: 100%;
  height: 100%;
  
  .sizzle {
    opacity: 0;
    transition: 0.1s opacity;
  }

  ${props => `
    ${[...Array(props.frame)].map((_, i) => `#sizzle-${i + 1}`).join(", ")} {
      opacity: 1;
    }
  `}
`

const CalendarMonth = styled.div`
  position: absolute;
  top: 2.6em;
  left: 5.3em;
  
  font-weight: 600;
  font-size: 1.5em;
  line-height: 1em;
  letter-spacing: -0.02em;
  
  pointer-events: none;
`

const CalendarYear = styled.div`
  position: absolute;
  top: 2.1em;
  left: 10em;
  
  font-weight: 400;
  font-size: 2em;
  line-height: 0.75em;
  letter-spacing: -0.02em;
  
  pointer-events: none;
`

const VideoWrapper = styled.div`
  position: absolute;
  top: 3.5em;
  left: 2.9em;

  width: 28.5em;
  height: 16em;
  
  transform: rotate(-4.86deg);
  
  background: var(--graphite-80);
  
  border-radius: 1em;
  
  /* TODO: video */
`

export default SectionProcess

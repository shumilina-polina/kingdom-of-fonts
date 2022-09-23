import React, { useCallback } from "react"
import styled from "styled-components"

import Button from "../../common/Button"
import Tag from "../../common/Tag"
import { TextBase, TextHighlight } from "../../common/TextHighlight"
import Section from "./Section"
import { usePageData } from "../../../context/PageDataContext"

import textStyles from "../../common/text"
import * as miscStyles from "../../common/misc"

import { pluralize } from "../../../utils"

import card1 from "../../../assets/artreview/hero-card-1.png"
import card2 from "../../../assets/artreview/hero-card-2.png"
import card3 from "../../../assets/artreview/hero-card-3.png"
import Lightning from "../../../assets/common/svgs/lightning.svg"
import ItemIcon1 from "../../../assets/artreview/svgs/hero-item-1.svg"
import ItemIcon2 from "../../../assets/artreview/svgs/hero-item-2.svg"
import ItemIcon3 from "../../../assets/artreview/svgs/hero-item-3.svg"
import ItemIcon4 from "../../../assets/artreview/svgs/hero-item-4.svg"

const SectionHero = ({ tariffsElementRef }) => {
  const pageData = usePageData()
  const yearMonth = pageData.data && pageData.data.year_month

  const scrollToTariffs = useCallback(() => {
    tariffsElementRef.current.scrollIntoView({behavior: "smooth"})
  }, [tariffsElementRef])

  return (
    <Section>
      <Frame>
        <Content>
          <Title>Артдирекшен</Title>
          <Tags hidden={!yearMonth}>
            <Tag highlight iconLeft={<Lightning />}>
              {yearMonth && (
                `${yearMonth.participants_left} ${pluralize(yearMonth.participants_left, "место", "места", "мест")}`
              )}
            </Tag>
            <Tag>{yearMonth && yearMonth.month_display}</Tag>
            <Tag>1 месяц</Tag>
          </Tags>
          <Text>
            <TextHighlight>
              Видеоразборы дважды в неделю{" "}
            </TextHighlight>
            и&nbsp;дизайн-практика под руководством арт-директора с персональной обратной связью в чате
          </Text>
        </Content>
        <Footer>
          <FooterContent>
            <Items>
              <Item>
                <ItemIcon><ItemIcon1 /></ItemIcon>
                <ItemText>Дизайним<br />макеты</ItemText>
              </Item>
              <Item>
                <ItemIcon><ItemIcon2 /></ItemIcon>
                <ItemText>Собираем<br />кейсы</ItemText>
              </Item>
              <Item>
                <ItemIcon><ItemIcon3 /></ItemIcon>
                <ItemText>Оформляем<br />портфолио</ItemText>
              </Item>
              <Item>
                <ItemIcon><ItemIcon4 /></ItemIcon>
                <ItemText>Работаем<br />над проектами</ItemText>
              </Item>
            </Items>
            <Button
              iconRight={<Lightning />}
              onClick={scrollToTariffs}
            >
              Записаться
            </Button>
          </FooterContent>
        </Footer>
        <CardsWrapper>
          <CardsGlow />
          <Cards>
            <Card1 src={card1} />
            <Card2 src={card2} />
            <Card3 src={card3} />
          </Cards>
        </CardsWrapper>
      </Frame>
    </Section>
  )
}

const Frame = styled.div`
  ${miscStyles.Glass}

  background:
    linear-gradient(#0c0c0c, #0c0c0c) padding-box,
    linear-gradient(180deg, #353535 0%, #111111 100%) border-box;
  border: 0.15em solid transparent;

  border-radius: 3em;
  
  position: relative;
`

const Content = styled.div`
  padding: 1.8em 37em 2.5em 4em;
  
  height: 28em;
  
  display: flex;
  flex-direction: column;
  
  position: relative;
  z-index: 2;
`

const Title = styled.h1`
  ${textStyles.title.XL}

  margin: 0 0 0.3375em 0;
`

const Tags = styled.div`
  display: flex;

  color: var(--graphite-60);
  
  transition: 0.3s opacity;
  
  ${props => props.hidden && `
    opacity: 0;
  `}
`

const Text = styled(TextBase)`
  ${textStyles.text.XL}

  color: var(--graphite-50);
  
  margin-top: auto;
`

const Footer = styled.div`
  border-top: 0.15em solid rgba(255, 255, 255, 0.03);
`

const FooterContent = styled.div`
  padding: 2em 4em 2.5em;
  
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  position: relative;
  z-index: 3;
`

const Items = styled.ul`
  margin: 0;
  padding: 0;

  display: flex;
  gap: 2.25em;
`

const Item = styled.li`
  display: flex;
  align-items: center;
`

const ItemIcon = styled.div`
  width: 3em;
  height: 2.3em;
  
  margin-right: 0.5em;
  
  svg {
    width: 100%;
    height: 100%;
  }
`

const ItemText = styled.div`
  ${textStyles.text.M}
  
  color: var(--graphite-50);
`

const CardsWrapper = styled.div`
  position: absolute;
  top: -10em;
  right: 0;
  bottom: 0;
  left: 0;
  
  z-index: 1;
  
  overflow: hidden;
  
  pointer-events: none;
`

const CardsGlow = styled.div`
  position: absolute;
  top: -10em;
  right: 13em;
  width: 30.5em;
  height: 60.5em;
  
  border-radius: 100%;
  
  background: radial-gradient(
    75.21% 94.6% at 41.95% 112.84%, 
    rgba(237, 255, 2, 0.5) 0%, 
    rgba(198, 231, 69, 0) 92.71%
  );
  filter: blur(1.2em);
  transform: rotate(-73.81deg);
  
  transition: 0.4s opacity;
  
  opacity: 0.3;
  
  ${Frame}:hover & {
    opacity: 0.8;
  }
`

const Cards = styled.div`

`

const Card = styled.img`
  position: absolute;
  
  transition: 0.4s transform;
  
  ${Frame}:hover & {
    transform: none;
  }
`

const Card1 = styled(Card)`
  width: 27.25em;
  
  bottom: 10.5em;
  left: 43.5em;
  
  z-index: 3;
  
  transform: scale(0.89) translate(8em, 0);
`

const Card2 = styled(Card)`
  width: 27.5em;
  
  bottom: 7.7em;
  left: 48.9em;
  
  z-index: 2;
  
  transform: scale(0.9) translate(5em, 0);
`

const Card3 = styled(Card)`
  width: 32em;
  
  bottom: 2.5em;
  left: 51.9em;
  
  z-index: 1;
  
  transform: scale(0.88) translate(2em, 0);
`

export default SectionHero

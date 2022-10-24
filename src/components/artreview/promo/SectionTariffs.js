import React, {useCallback, useState} from "react"
import styled from "styled-components"

import Button from "../../common/Button"
import Tag from "../../common/Tag"
import Collapse from "../../common/Collapse"
import { TextHighlightStyle } from "../../common/TextHighlight"
import Section from "./Section"
import SectionHeader from "./SectionHeader"
import { usePageData } from "../../../context/PageDataContext"
import { pluralize } from "../../../utils"

import textStyles from "../../common/text"

import ArrowDown from "../../../assets/common/svgs/arrow-down.svg"
import Infinity from "../../../assets/common/svgs/infinity.svg"
import Lightning from "../../../assets/common/svgs/lightning.svg"
import fire from "../../../assets/artreview/fire.gif"

const SectionTariffs = ({ innerRef }) => {
  const pageData = usePageData()
  const yearMonth = pageData.data && pageData.data.year_month

  const tagText = yearMonth && (
    `${yearMonth.participants_left} ${pluralize(yearMonth.participants_left, "место", "места", "мест")}`
  )

  const url = "https://t.me/andrepavlushin"

  const renderCard1 = ({ isOpen, toggle }) => (
    <Card1>
      <CardHeader>
        <CardHeaderTag>Без видеоразборов</CardHeaderTag>
        <Tag size="S" iconLeft={<Infinity />}>мест</Tag>
        <CardHeaderArrowWrapper isOpen={isOpen} onClick={toggle}>
          <ArrowDown />
        </CardHeaderArrowWrapper>
      </CardHeader>
      <CardTitle>Пробник</CardTitle>
      <Price>
        <PriceValue>250</PriceValue>
        <PriceDescription>
          <PriceDescriptionLine1>₽/первый месяц</PriceDescriptionLine1>
          <PriceDescriptionLine2>со второго 500₽</PriceDescriptionLine2>
        </PriceDescription>
      </Price>
      <Description>
        Посмотреть чё как, посидеть в&nbsp;чате, посмотреть разборы других, пообщаться с ребятами
      </Description>
      <Collapse isOpen={isOpen}>
        <Features>
          <Feature disabled>8 видеоразборов</Feature>
          <Feature>Доступ к чату в телеге</Feature>
          <Feature>Доступ к актуальным разборам</Feature>
          <Feature>Доступ к архиву разборов</Feature>
          <Feature>Помощь ребят из чата</Feature>
          <Feature>Без вылетов</Feature>
        </Features>
      </Collapse>
      <Button
        type="outline"
        iconRight={<Lightning />}
        href={url}
        target="_blank"
        rel="noopener noreferrer"
      >
        Записаться
      </Button>
    </Card1>
  )

  const renderCard2 = ({ isOpen, toggle }) => (
    <Card2>
      <CardHeader>
        <CardHeaderTag>Bидеоразборы</CardHeaderTag>
        <Tag size="S" iconLeft={<Lightning />} highlight>
          {tagText}
        </Tag>
        <CardHeaderArrowWrapper isOpen={isOpen} onClick={toggle}>
          <ArrowDown />
        </CardHeaderArrowWrapper>
      </CardHeader>
      <CardTitle>Артдирекшен</CardTitle>
      <Price>
        <PriceValue>3900</PriceValue>
        <PriceDescription>
          <PriceDescriptionLine1>₽/первый месяц</PriceDescriptionLine1>
          <PriceDescriptionLine2>со второго 4900₽</PriceDescriptionLine2>
        </PriceDescription>
      </Price>
      <Description>
        Залететь на видеоразборы, попрактиковаться, улучшить макеты, собрать портфолио
      </Description>
      <Collapse isOpen={isOpen}>
        <Features>
          <Feature highlight>8 видеоразборов</Feature>
          <Feature>Доступ к чату в телеге</Feature>
          <Feature>Доступ к актуальным разборам</Feature>
          <Feature>Доступ к архиву разборов</Feature>
          <Feature>Помощь ребят из чата</Feature>
          <Feature>Без вылетов</Feature>
        </Features>
      </Collapse>
      <Button
        type="primary"
        iconRight={<Lightning />}
        href={url}
        target="_blank"
        rel="noopener noreferrer"
      >
        Записаться
      </Button>
    </Card2>
  )

  const renderCard3 = () => (
    <Card3>
      <CardHeader>
        <CardHeaderTag>Стартер-пак</CardHeaderTag>
        <Tag size="S" iconLeft={<Lightning />}>
          {tagText}
        </Tag>
      </CardHeader>
      <CardTitle>Три внутри</CardTitle>
      <Price>
        <PriceValue>6900</PriceValue>
        <PriceDescription>
          <PriceDescriptionLine1>₽ за всё</PriceDescriptionLine1>
          <PriceDescriptionLine2>вместо <s>7900₽</s></PriceDescriptionLine2>
        </PriceDescription>
      </Price>
      <Description>
        {/* TODO: list, links */}
        Личная консультация (1 час)
        Артдирекшен (1 мес)
        Шрифтотека (1 год)
      </Description>
      <Button
        type="secondary"
        iconRight={<Lightning />}
        href={url}
        target="_blank"
        rel="noopener noreferrer"
      >
        Записаться
      </Button>
    </Card3>
  )

  return (
    <Section ref={innerRef}>
      <SectionHeader>Тарифы</SectionHeader>
      <TariffsWrapper>
        <Tariffs>
          <Opener render={renderCard1} />
          <Opener render={renderCard2} />
          {renderCard3()}
        </Tariffs>
      </TariffsWrapper>
    </Section>
  )
}

const Opener = ({ render }) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = useCallback((e) => {
    setIsOpen((isOpen) => !isOpen)
  }, [])

  return render({ isOpen, toggle })
}

const TariffsWrapper = styled.div`
  margin-top: 2em;
`

const Tariffs = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1.5em;
`

const Card = styled.div`
  --collapse-easing: cubic-bezier(.22,.61,.36,1);
  --collapse-duration: 0.4s;
  
  flex: 1;
  
  padding: 2.125em 1.8em 2.5em;
  
  border: 0.15em solid transparent;
  border-radius: 2.25em;
  
  color: var(--graphite-50);
  
  transition: 0.2s transform;
  
  transform-origin: 50% 12.75em;

  &:hover {
    transform: scale(103%);
  }

  // &:active {
  //   transform: scale(100%);
  // }
`

const CardHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5em;
  
  margin-bottom: 0.625em;
`

const CardHeaderTag = styled.div`
  ${textStyles.tag.S}
`

const CardHeaderArrowWrapper = styled.a`
  display: block;

  position: relative;

  color: var(--graphite-60);
  
  display: flex;
  justify-content: center;
  align-items: center;
  
  width: 1.6em;
  
  margin-left: auto;
  
  cursor: pointer;
  
  svg {
    width: 100%;
    height: 100%;
  }
  
  transition: var(--collapse-duration) transform;
  
  ${props => props.isOpen && `
    transform: rotate(-180deg);
  `}
  
  &::after {
    content: "";
    
    position: absolute;
    
    top: -120%;
    left: -70%;
    bottom: -120%;
    right: -70%;
  }
  
  &:hover {
    color: var(--graphite-70);
  }
`

const CardTitle = styled.div`
  ${textStyles.title.M}
`

const Price = styled.div`
  display: flex;
  align-items: center;
  gap: 0.7em;
  
  margin: 0.5em 0 1em;
`

const PriceValue = styled.div`
  font-weight: 400;
  font-size: 3.5em;
  line-height: 1em;
  letter-spacing: -0.04em;
`

const PriceDescription = styled.div`
  ${textStyles.item.S}
`

const PriceDescriptionLine1 = styled.div`

`

const PriceDescriptionLine2 = styled.div`

`

const Description = styled.div`
  ${textStyles.text.M}

  margin-bottom: 1.6em;
`

const Features = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  padding-bottom: 2.25em;
`

const Feature = styled.div`
  ${textStyles.item.M}
  
  ${props => props.disabled && `
    color: var(--graphite-70);
  `}
  
  ${props => props.highlight && TextHighlightStyle}
  
  &::before {
    display: inline-block;
    width: 1em;
    
    ${props => props.disabled
      ? `
        content: "— ";
      `
      : `
        content: "✓ ";
        transform: scale(1.2);
      `
    }
    
    ${props => props.highlight && `
      color: var(--accent-flat-1);
    `}
  }
`

const Card1 = styled(Card)`
  border-color: var(--graphite-60);
  
  ${CardTitle}, ${PriceValue}, ${PriceDescriptionLine1} {
    color: var(--graphite-0);
  }
`

const Card2 = styled(Card)`
  background: 
    linear-gradient(var(--graphite-100), var(--graphite-100)) padding-box,
    var(--accent) border-box;

  ${CardHeader}, ${PriceValue} {
    color: var(--accent-flat-1);
  }
  
  ${CardTitle} {
    color: var(--graphite-0);
  }
  
  ${PriceDescriptionLine1} {
    ${TextHighlightStyle}
  }
`

const Card3 = styled(Card)`
  background: 
    url(${fire}) top 10em left -16em / 47em no-repeat border-box,
    var(--accent) border-box;
    
  color: var(--graphite-90);
`

export default SectionTariffs

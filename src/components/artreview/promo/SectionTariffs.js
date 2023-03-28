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
      <CardFooter>
        <Button
          type="outline"
          iconRight={<Lightning />}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
        >
          Записаться
        </Button>
      </CardFooter>
    </Card1>
  )

  const renderCard2 = ({ isOpen, toggle }) => (
    <Card2 ref={innerRef}>
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
        <PriceValue>4500</PriceValue>
        <PriceDescription>
          <PriceDescriptionLine1>₽/первый месяц</PriceDescriptionLine1>
          <PriceDescriptionLine2>со второго 5500₽</PriceDescriptionLine2>
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
      <CardFooter>
        <Button
          type="primary"
          iconRight={<Lightning />}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
        >
          Записаться
        </Button>
      </CardFooter>
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
        <PriceValue>7900</PriceValue>
        <PriceDescription>
          <PriceDescriptionLine1>₽ за всё</PriceDescriptionLine1>
          <PriceDescriptionLine2>вместо <s>8900₽</s></PriceDescriptionLine2>
        </PriceDescription>
      </Price>
      <Description>
        <DescriptionLine>Личная консультация (1 час)</DescriptionLine>
        <DescriptionLine>Артдирекшен (1 мес)</DescriptionLine>
        <DescriptionLine>Шрифтотека (1 год)</DescriptionLine>
      </Description>
      <CardFooter>
        <Button
          type="secondary"
          iconRight={<Lightning />}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
        >
          Записаться
        </Button>
      </CardFooter>
    </Card3>
  )

  return (
    <Section>
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
  margin: 0 0 2.75em 0;

  @media (min-width: 1090px) {
    margin: 2em 0 0 0;
  }
`

const Tariffs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25em;

  @media (min-width: 1090px) {
    flex-direction: row;
    align-items: flex-start;
    gap: 1.5em;
  }
`

const Card = styled.div`
  --collapse-easing: cubic-bezier(.22,.61,.36,1);
  --collapse-duration: 0.4s;

  flex: 1;

  padding: 1.625em 1.5em 1.75em;

  border: 1px solid transparent;
  border-radius: 2em;

  color: var(--graphite-50);

  transition: 0.2s transform;

  transform-origin: 50% 12.75em;

  @media (min-width: 1090px) {
    padding: 2.125em 1.8em 2.5em;

    border-width: 0.15em;
    border-radius: 2.25em;

    &:hover {
      transform: scale(103%);
    }
  }
`

const CardHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5em;

  margin-bottom: 0.45em;

  @media (min-width: 1090px) {
    margin-bottom: 0.625em;
  }
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

  width: 1.2em;

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

  @media (min-width: 1090px) {
    width: 1.6em;
  }
`

const CardTitle = styled.div`
  ${textStyles.title.M}
`

const Price = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5em;

  margin: 0.4em 0 0.7em;

  @media (min-width: 1090px) {
    gap: 0.7em;

    margin: 0.5em 0 1em;
  }
`

const PriceValue = styled.div`
  ${textStyles.factoid.M}
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
`

const DescriptionLine = styled.div`

`

const Features = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  padding-top: 0.75em;
  
  @media (min-width: 1090px) {
    padding-top: 1.5em;
  }
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
      ? `content: "— ";`
      : `content: "✓ ";`
    }

    ${props => props.highlight && `
      color: var(--accent-flat-1);
    `}
  }

  line-height: 1.33em;

  @media (min-width: 1090px) {
    line-height: 1.222em;
  }
`

const CardFooter = styled.div`
  margin-top: 1.25em;

  @media (min-width: 1090px) {
    margin-top: 2em;
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
    url(${fire}) top 500% left 73% / 34.1em no-repeat border-box,
    var(--accent) border-box;

  color: var(--graphite-90);

  @media (min-width: 1090px) {
    background-size: 47em, auto;
  }
`

export default SectionTariffs

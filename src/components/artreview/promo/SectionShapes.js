import React from "react"
import styled from "styled-components"

import { TextHighlightStyle } from "../../common/TextHighlight"
import Section from "./Section"

import textStyles from "../../common/text"

import image1 from "../../../assets/artreview/shapes-item-1.svg"
import image2 from "../../../assets/artreview/shapes-item-2.svg"
import image3 from "../../../assets/artreview/shapes-item-3.svg"

const SectionShapes = () => {
  return (
    <Section clipContent>
      <Wrapper>
        <Shape1>
          <ShapeTag>то, что нужно</ShapeTag>
          <ShapeHeader>Выпускникам<br />Школы Гранич</ShapeHeader>
          <ShapeText>
            Закрепить материал курсов,<br />
            превратить знания в навыки,<br />
            поработать с новыми<br />
            форматами
          </ShapeText>
        </Shape1>
        <Shape2>
          <ShapeTag>очень нада</ShapeTag>
          <ShapeHeader>Дизайнерам<br />в поиске работы</ShapeHeader>
          <ShapeText>
            Доделать макеты, собрать<br />
            в кучу, оформить по кейсам<br />
            и собрать рабочее<br />
            портфолио
          </ShapeText>
        </Shape2>
        <Shape3>
          <ShapeTag>этого не хватает</ShapeTag>
          <ShapeHeader>&nbsp;&nbsp;Дизам с работой,<br />но без арт-дира</ShapeHeader>
          <ShapeText>
            &nbsp;&nbsp;&nbsp;&nbsp;Получать качественную<br />
            &nbsp;&nbsp;обратную связь, расти,<br />
            &nbsp;развиваться и улучшать<br />
            уровень своих работ
          </ShapeText>
        </Shape3>
      </Wrapper>
    </Section>
  )
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  
  margin: -2.3em 0;
  
  @media (min-width: 1090px) {
    flex-direction: row;
  
    margin: 0;
  }
`

const ShapeTag = styled.div`
  ${textStyles.tag.M}
  ${TextHighlightStyle}
  
  margin-bottom: 1.2em;
  
  @media (min-width: 1090px) {
    margin-bottom: 1em;
  }
`

const ShapeHeader = styled.div`
  ${textStyles.header.L}
  
  margin-bottom: 0.53em;
`

const ShapeText = styled.div`
  ${textStyles.text.L}
  
  color: var(--graphite-50);
`

const Shape = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  text-align: center;
  
  padding-bottom: 1em;
  
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  
  @media (min-width: 1090px) {
    padding-bottom: 1.5em;
  }
`

const Shape1 = styled(Shape)`
  background-image: url(${image1});
  
  width: 17.8em;
  height: 17.8em;
  
  transform: translateX(-0.2em) rotate(6.1deg);
  
  margin-bottom: -4em;
  
  @media (min-width: 1090px) {
    width: 25em;
    height: 25em;
  
    margin-right: 1em;
    margin-bottom: 0;
    
    transform: none;
  }
`

const Shape2 = styled(Shape)`
  background-image: url(${image2});
  
  width: 19em;
  height: 19em;
  
  transform: rotate(-15.32deg);
  
  margin-bottom: -4.5em;
  
  @media (min-width: 1090px) {
    width: 26em;
    height: 26em;
    
    margin-bottom: 0;
  
    transform: none;
  }
`

const Shape3 = styled(Shape)`
  background-image: url(${image3});
  
  width: 17.5em;
  height: 17.5em;
  
  align-items: flex-start;
  text-align: left;
  
  ${ShapeTag} {
    margin-left: 6.2em;
  }
  
  ${ShapeHeader} {
    margin-left: 2.4em;
  }
  
  ${ShapeText} {
    margin-left: 2em;
  }
  
  transform: rotate(6.83deg);
  
  @media (min-width: 1090px) {
    width: 26em;
    height: 26em;
  
    transform: none;
  
    ${ShapeTag} {
      margin-left: 5.8em;
    }
  }
`

export default SectionShapes

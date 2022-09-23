import React from "react"
import styled from "styled-components"

import Tag from "../../common/Tag"
import Stories from "../../common/Stories"
import { TextBase, TextHighlight } from "../../common/TextHighlight"
import Section from "./Section"

import textStyles from "../../common/text"

import image0 from "../../../assets/artreview/stories-0.svg"
import image1 from "../../../assets/artreview/stories-1.svg"
import image2 from "../../../assets/artreview/stories-2.svg"
import image3 from "../../../assets/artreview/stories-3.svg"
import image4 from "../../../assets/artreview/stories-4.svg"
import image5 from "../../../assets/artreview/stories-0.svg" // sic
import image6 from "../../../assets/artreview/stories-6.svg"
import Lightning from "../../../assets/common/svgs/lightning.svg"

const stories = [
  {
    tag: (props) => <Tag icon={<Lightning />} {...props} />,
    frame: () => (
      <Frame0>
        <Content>
          <Header>С чем помогу</Header>
          <Text>
            <TextHighlight>
              Работаем с разными
              форматами и носителями{" "}
            </TextHighlight>
            от&nbsp;креативов до сайтов
            и&nbsp;оформим результаты
            в&nbsp;портфолио на Беханс
          </Text>
        </Content>
      </Frame0>
    )
  },
  {
    tag: (props) => <Tag {...props}>Полиграфия</Tag>,
    frame: () => (
      <Frame1>
        <Content>
          <Header>Полиграфия</Header>
          <Text>
            <TextHighlight>
              Оформим одностраничные
              или многостраничные{" "}
            </TextHighlight>
            печатные форматы,
            учитывая их особенности
            и&nbsp;ограничения
          </Text>
        </Content>
      </Frame1>
    )
  },
  {
    tag: (props) => <Tag {...props}>Креативы</Tag>,
    frame: () => (
      <Frame2>
        <Content>
          <Header>Креативы</Header>
          <Text>
            <TextHighlight>
              Задизайним яркие креативы{" "}
            </TextHighlight>
            для соцсетей, сайтов или
            маркетплейсов с ресайзами
            под разные форматы
          </Text>
        </Content>
      </Frame2>
    )
  },
  {
    tag: (props) => <Tag {...props}>Промостраницы</Tag>,
    frame: () => (
      <Frame3>
        <Content>
          <Header>Промостраницы</Header>
          <Text>
            <TextHighlight>
              Соберём структурированные промостраницы{" "}
            </TextHighlight>
            и раскроем
            ценность товара или услуги
            с&nbsp;помощью приёмов
            визуального повествования
          </Text>
        </Content>
      </Frame3>
    )
  },
  {
    tag: (props) => <Tag {...props}>Сайты</Tag>,
    frame: () => (
      <Frame4>
        <Content>
          <Header>Сайты</Header>
          <Text>
            <TextHighlight>
              Продумаем и соберём сайт{" "}
            </TextHighlight>
            с&nbsp;дружелюбным интерфейсом,
            удобной, интуитивной
            и&nbsp;понятной структурой
          </Text>
        </Content>
      </Frame4>
    )
  },
  {
    tag: (props) => <Tag {...props}>Айдентика</Tag>,
    frame: () => (
      <Frame5>
        <Content>
          <Header>Айдентика</Header>
          <Text>
            <TextHighlight>
              Задизайним айдентику{" "}
            </TextHighlight>
            с&nbsp;крепкой метафорой,
            понятными образами
            и&nbsp;стильным визуалом, который
            будет легко масштабироваться
          </Text>
        </Content>
      </Frame5>
    )
  },
  {
    tag: (props) => <Tag {...props}>Беханс</Tag>,
    frame: () => (
      <Frame6>
        <Content>
          <Header>Кейсы на Беханс</Header>
          <Text>
            <TextHighlight>
              Грамотно оформим кейсы в&nbsp;портфолио,{" "}
            </TextHighlight>
            понимая и&nbsp;учитывая на что в&nbsp;презентации
            обращают внимание заказчики
          </Text>
        </Content>
      </Frame6>
    )
  },
]

const SectionStories = () => {
  return (
    <Section>
      <Stories
        stories={stories}
        renderTags={(tags) => (
          <Tags>{tags}</Tags>
        )}
      />
    </Section>
  )
}

const Tags = styled.div`
  position: absolute;
  top: 3.5em;
  left: 5em;
  z-index: 2;

  display: flex;
  
  color: var(--graphite-60);
`

const Content = styled.div`

`

const Header = styled.h3`
  ${textStyles.header.XL}

  margin: 0 0 1em 0;
`

const Text = styled(TextBase)`
  ${textStyles.text.XL}

  color: var(--graphite-50);
`

const Frame = styled.div`
  border: 0.1em solid var(--graphite-80);
  border-radius: 4.375em;
  
  padding: 10em 0 0 5em;
  
  height: 35em;
  
  background-repeat: no-repeat;
`

const Frame0 = styled(Frame)`
  background-image: url(${image0});
  background-position: top 2.1em right -1.45em;
  background-size: 45em auto;
  
  ${Content} {
    width: 30em;
  }
`

const Frame1 = styled(Frame)`
  background-image: url(${image1});
  background-position: top 1.1em right -1.6em;
  background-size: 41em auto;
  
  ${Content} {
    width: 28em;
  }
`

const Frame2 = styled(Frame)`
  background-image: url(${image2});
  background-position: top 4.5em right -2.1em;
  background-size: 43.8em auto;
  
  ${Content} {
    width: 28em;
  }
`

const Frame3 = styled(Frame)`
  background-image: url(${image3});
  background-position: top 8em right 2em;
  background-size: 34.5em auto;
  
  ${Content} {
    width: 31em;
  }
`

const Frame4 = styled(Frame)`
  background-image: url(${image4});
  background-position: top 5.9em right 0.5em;
  background-size: 36em auto;
  
  ${Content} {
    width: 31em;
  }
`

const Frame5 = styled(Frame)`
  background-image: url(${image5});
  background-position: top 2.4em right -2.6em;
  background-size: 45em auto;
  
  ${Content} {
    width: 31em;
  }
`

const Frame6 = styled(Frame)`
  background-image: url(${image6});
  background-position: top 6.7em right 2em;
  background-size: 33em auto;
  
  ${Content} {
    width: 32.5em;
  }
`

export default SectionStories

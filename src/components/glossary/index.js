import React from "react"

import { Root, Container } from "../common/layout/promo"
import { Card, Cards } from "../common/Card"
import Header from "./Header"
import ColorScheme from "./ColorScheme"

const cards = [
  {
    id: 1,
    tags: ["Дизайн", "Интерфейс"],
    title: "Ценность данных",
    description: (
      "Принцип при котором система рассматривает все данные, вводимые пользователем, как бесценные, " +
      "то есть бережно их хранит."
    ),
    linkText: "Джеф Раскин. Интерфейс. Новые направления в проектировании компьютерных систем. Гл. 1",
    linkURL: "#",
  },
  {
    id: 2,
    tags: ["Дизайн", "Типографика"],
    title: "Маюскульные цифры",
    description: "Цифры без верхних и нижних выносных элементов.",
    linkText: "Роберт Брингхерст. Основы стиля в типографике. Цифры",
    linkURL: "#",
  },
  {
    id: 3,
    tags: ["Продукт", "Управление"],
    title: "“Бесплатность”",
    description: (
      "Признак сильного дизайна — бесплатность или минимальная стоимость решения проблемы. " +
      "Бесплатный результат достигается за счёт использования функций и ресурсов, уже имеющихся в системе."
    ),
    linkText: "Артём Горбунов. Совет о целостности системы",
    linkURL: "#",
  },
]

const Reference = () => {
  return (
    <ColorScheme>
      <Root>
        <Header />
        <Container>
          <Cards>
            {/* TODO: id */}
            {cards.concat(cards).concat(cards).map((card, i) => (
              <Card key={i} {...card} />
            ))}
          </Cards>
          {/*<Footer />*/}
        </Container>
      </Root>
    </ColorScheme>
  )
}

export default Reference

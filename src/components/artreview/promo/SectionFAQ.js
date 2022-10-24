import React from "react"
import styled from "styled-components"

import { TextHighlightStyle } from "../../common/TextHighlight"
import Section from "./Section"
import SectionHeader from "./SectionHeader"
import { Accordion, AccordionEntry } from "../../common/Accordion"
import { usePageData } from "../../../context/PageDataContext"

import textStyles from "../../common/text"

import { removeLineSeparators } from "../../../utils"

const SectionFAQ = () => {
  const pageData = usePageData()
  const entries = pageData.data ? pageData.data.faq_entries : []

  return (
    <Section>
      <SectionHeader>ФАК</SectionHeader>
      <FAQWrapper>
        <Accordion>
          {entries.map((entry, entryIndex) => (
            <AccordionEntry
              title={entry.title}
              isOpenInitial={entryIndex === 0}
              key={entry.id}
            >
              <Questions>
                {entry.questions.map((question) => (
                  <Question key={question.id}>
                    <QuestionText>
                      {removeLineSeparators(question.question_text)}
                    </QuestionText>
                    <AnswerText big={!!question.is_big}>
                      {removeLineSeparators(question.answer_text)}
                    </AnswerText>
                  </Question>
                ))}
              </Questions>
            </AccordionEntry>
          ))}
        </Accordion>
      </FAQWrapper>
    </Section>
  )
}

const FAQWrapper = styled.div`
  margin: 0 0 2.75em 0;
  
  @media (min-width: 1090px) {
    margin: 2em 0 0 0;
  }
`

const Questions = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 1em;
  
  @media (min-width: 1090px) {
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 2em 1em;
  }
`

const Question = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  
  @media (min-width: 1090px) {
    gap: 0.75em;
  }
`

const QuestionText = styled.div`
  ${textStyles.header.S}
  ${TextHighlightStyle}
`

const AnswerText = styled.div`
  ${props => !props.big && textStyles.text.S}

  ${props => props.big && `
    font-weight: 300;
    font-size: 1.5em;
    line-height: 1.083em;
    letter-spacing: -0.02em;
  
    @media (min-width: 1090px) {
      font-weight: 200;
      font-size: 2em;
      line-height: 1em;
    }
  `}
`

export default SectionFAQ

import React, { useRef } from "react"
import ScrollContainer from "react-indiana-drag-scroll"
import styled from "styled-components"

import { TextBase } from "../../common/TextHighlight"
import ScrollBar from "../../common/ScrollBar"
import Section from "./Section"
import SectionHeader from "./SectionHeader"
import { usePageData } from "../../../context/PageDataContext"
import useScrollShadows from "../../../hooks/useScrollShadows"

import textStyles from "../../common/text"

import { formatDate, removeLineSeparators } from "../../../utils"

import _Chomper from "../../../assets/artreview/svgs/chomper-left.svg"
import TelegramIcon from "../../../assets/common/svgs/review-telegram.svg"
import BehanceIcon from "../../../assets/common/svgs/review-behance.svg"
import InstagramIcon from "../../../assets/common/svgs/review-instagram.svg"
import DribbbleIcon from "../../../assets/common/svgs/review-dribbble.svg"

const SectionReviews = () => {
  const pageData = usePageData()
  const reviews = pageData.data ? pageData.data.reviews : []

  const scrollingElementRef = useRef()

  const { showLeftShadow, showRightShadow } = useScrollShadows(scrollingElementRef)

  return (
    <Section>
      <SectionHeader>Отзывы</SectionHeader>
      <ReviewsWrapper>
        <ScrollContainerWrapper>
          <ScrollContainer innerRef={scrollingElementRef}>
            <Reviews>
              {reviews.map((review) => (
                <Review
                  key={review.id}
                  review={review}
                />
              ))}
            </Reviews>
          </ScrollContainer>
          <ChomperLeft hidden={!showLeftShadow} />
          <ChomperRight hidden={!showRightShadow} />
        </ScrollContainerWrapper>
        <ScrollBar scrollingElementRef={scrollingElementRef}/>
      </ReviewsWrapper>
    </Section>
  )
}

const Review = ({ review }) => {
  return (
    <ReviewBody>
      <ReviewContent>
        <ReviewHeader>
          <ReviewDate>
            {formatDate(review.date)}
          </ReviewDate>
          <ReviewTag>
            {review.tag}
          </ReviewTag>
        </ReviewHeader>
        <ReviewText>
          {review.text_parts.map((part, i) => (
            <ReviewTextPart key={i} highlight={part.highlight}>
              {removeLineSeparators(part.text)}
            </ReviewTextPart>
          ))}
          <ReviewMoreButton href={review.url} target="_blank" rel="noopener noreferrer" />
        </ReviewText>
      </ReviewContent>
      <ReviewFooter>
        <ReviewAuthor>
          <ReviewAuthorPhoto image={review.author_photo} />
          <ReviewAuthorContent>
            <ReviewAuthorName>
              {review.author_name}
            </ReviewAuthorName>
            <ReviewAuthorOccupation
              href={review.author_occupation_url || undefined}
              target="_blank"
              rel="noopener noreferrer"
            >
              <ReviewAuthorOccupationLine>{review.author_occupation_1}</ReviewAuthorOccupationLine>
              <ReviewAuthorOccupationLine>{review.author_occupation_2}</ReviewAuthorOccupationLine>
            </ReviewAuthorOccupation>
          </ReviewAuthorContent>
        </ReviewAuthor>
        <ReviewSocialLinks>
          {review.author_telegram_url && (
            <ReviewSocialLink href={review.author_telegram_url} target="_blank" rel="noopener noreferrer">
              <TelegramIcon/>
            </ReviewSocialLink>
          )}
          {review.author_behance_url && (
            <ReviewSocialLink href={review.author_behance_url} target="_blank" rel="noopener noreferrer">
              <BehanceIcon />
            </ReviewSocialLink>
          )}
          {review.author_instagram_url && (
            <ReviewSocialLink href={review.author_instagram_url} target="_blank" rel="noopener noreferrer">
              <InstagramIcon />
            </ReviewSocialLink>
          )}
          {review.author_dribbble_url && (
            <ReviewSocialLink href={review.author_dribbble_url} target="_blank" rel="noopener noreferrer">
              <DribbbleIcon />
            </ReviewSocialLink>
          )}
        </ReviewSocialLinks>
      </ReviewFooter>
    </ReviewBody>
  )
}

const ReviewMoreButton = (props) => {
  return (
    <ReviewMoreButtonWrapper>
      <ReviewMoreButtonBody {...props}>
        <ReviewMoreButtonDots>
          <ReviewMoreButtonDot1 />
          <ReviewMoreButtonDot2 />
          <ReviewMoreButtonDot3 />
        </ReviewMoreButtonDots>
      </ReviewMoreButtonBody>
    </ReviewMoreButtonWrapper>
  )
}

const ReviewsWrapper = styled.div`
  margin-bottom: 2.75em;
  
  @media (min-width: 1090px) {
    margin-bottom: 0;
  }
`

const ScrollContainerWrapper = styled.div`
  position: relative;
  
  margin: 0 -1em;
`

const Reviews = styled.div`
  display: inline-flex;
  gap: 1.5em;
  
  margin: 0 1em 2em;
  
  @media (min-width: 1090px) {
    margin: 3.25em 1em;
  }
`

const ReviewBody = styled.div`
  position: relative;

  width: 14.6875em;
  height: 18.375em;
  
  border-radius: 1.25em;

  background:
    radial-gradient(#282520 0%, #191919 35%) top 55% left 15% / 300% 300% padding-box,
    linear-gradient(180deg, #272727 0%, #1a1a1a 100%) border-box;
  border: 0.15em solid transparent;
  
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  
  @media (min-width: 1090px) {
    width: 18.375em;
    height: 22.75em;
    
    transition: 0.2s transform;
  
    &:hover {
      transform: scale(104%);
    }
  }
`

const ReviewContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
  
  padding: 1em;
  
  @media (min-width: 1090px) {
    padding: 1.25em 1em 0;
  }
`

const ReviewHeader = styled.div`
  display: flex;
  justify-content: space-between;
  
  color: var(--graphite-60);
`

const ReviewDate = styled.div`
  ${textStyles.caption.S}
`

const ReviewTag = styled.div`
  ${textStyles.caption.S}
`

const ReviewText = styled(TextBase)`
  ${textStyles.text.M}
  
  font-weight: 400;

  color: var(--graphite-50);
`

const ReviewTextPart = styled.span`
  ${props => props.highlight && `
    color: transparent;
  `}
  
  &:last-of-type {
    margin-right: 0.3em;
  }
`

const ReviewMoreButtonWrapper = styled.div`
  position: relative;
  display: inline-block;
  
  width: 2.4em;
  height: 1em;
`

const ReviewMoreButtonBody = styled.a`
  position: absolute;
  left: 0;
  bottom: -0.25em;

  width: 2.4em;
  height: 1em;
  
  padding: 0.25em 0.4em;

  border: 1px solid var(--graphite-70);
  border-radius: 9999px;
  
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  
  &:active {
    opacity: 0.6;
  }
`

const ReviewMoreButtonDots = styled.div`
  display: flex;
  gap: 0.1em;
`

const ReviewMoreButtonDot = styled.div`
  width: 0.2em;
  height: 0.2em;
  
  border-radius: 9999px;
  
  background: var(--graphite-50);
  
  transition: 0.2s transform;
  
  ${ReviewMoreButtonBody}:hover & {
    transform: translateX(0.75em);
  }
`

const ReviewMoreButtonDot1 = styled(ReviewMoreButtonDot)`
  ${ReviewMoreButtonBody}:hover & {
    transition-delay: 0.2s;
  }
`

const ReviewMoreButtonDot2 = styled(ReviewMoreButtonDot)`
  ${ReviewMoreButtonBody}:hover & {
    transition-delay: 0.1s;
  }
`

const ReviewMoreButtonDot3 = styled(ReviewMoreButtonDot)`

`

const ReviewFooter = styled.div`
  padding: 0.5em 0.8125em 1em;
  
  border-top: 0.1em solid var(--graphite-80);
`

const ReviewAuthor = styled.div`
  display: flex;
  align-items: center;
  gap: 1em;
`

const ReviewAuthorPhoto = styled.div`
  width: 3em;
  height: 3em;
  
  border-radius: 9999px;
  
  background-size: cover;
  background-position: center;
  
  ${props => props.image && `
    background-image: url(${props.image});
  `}
  
  @media (min-width: 1090px) {
    width: 3.5em;
    height: 3.5em;
  }
`

const ReviewAuthorContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2em;
  
  @media (min-width: 1090px) {
    gap: 0.3em;
  }
`

const ReviewAuthorName = styled.div`
  ${textStyles.tag.S}
`

const ReviewAuthorOccupation = styled.a`
  ${textStyles.caption.S}
  
  display: block;
  
  color: var(--graphite-0);
  opacity: 0.5;
  
  &:hover {
    text-decoration: none;
  }
`

const ReviewAuthorOccupationLine = styled.div`

`

const ReviewSocialLinks = styled.div`
  display: flex;
  gap: 0.25em;
  
  margin-top: 0.25em;
  margin-left: 4em;
  
  @media (min-width: 1090px) {
    margin-left: 4.5em;
  }
`

const ReviewSocialLink = styled.a`
  color: var(--graphite-60);

  width: 1.375em;
  height: 1.0625em;
  
  svg {
    width: 100%;
    height: 100%;
  }
  
  svg #icon {
    transition: 0.1s transform;
  }
  
  &:hover svg #logo {
    color: #AAAAAA;
    transform: scale(110%);
    transform-origin: 50%;
  }
  
  &:active svg #logo {
    color: var(--graphite-60);
    transform: none;
    transform-origin: 50%;
  }
  
  @media (min-width: 1090px) {
    width: 1.625em;
    height: 1.25em;
  }
`

const Chomper = styled(_Chomper)`
  position: absolute;
  top: 0;
  
  height: 100%;
  
  visibility: hidden;
  
  @media (min-width: 1090px) {
    visibility: visible;
  }
`

const ChomperLeft = styled(Chomper)`
  left: -1.3em;

  ${props => props.hidden && `
    transform: translateX(-55%);
  `}
`

const ChomperRight = styled(Chomper)`
  right: -1.3em;
  transform: scaleX(-1);

  ${props => props.hidden && `
    transform: scaleX(-1) translateX(-55%);
  `}
`

export default SectionReviews

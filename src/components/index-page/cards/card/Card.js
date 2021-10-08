import React from "react";
import {
  FontFormats,
  Format,
  Wrapper,
  Image,
  CardInfo,
  InfoItem,
  TestFontField,
  DownloadButton,
  FontAuthors,
  FontImage,
  CardFooter,
  StretchWrapper
} from "./styles";
import { INLINES } from "@contentful/rich-text-types"
import {renderRichText} from "gatsby-source-contentful/rich-text"

const Card = ({ data }) => {

  const truncate = (link) => {
    // console.log("length", link.length)
    if (link.length > 30) {
      return link.slice(0, 30) + "..."
    }
    return link
  }

  const options = {
    renderNode: {
      [INLINES.HYPERLINK]: node => {
        return (
          <a href={node.data.uri} target="_blank" rel="noopener noreferrer">
            {truncate(node.content[0].value)}
          </a>
        )
      },
    },
  }

  console.log("fontCSS", data.fontCSS)

  
  return (
    <Wrapper color={data.fontBackground}>
      <FontFormats>
        {data.fontFormats?.map((format, idx) => {
          return <Format key={idx}>{format}</Format>;
        })}
      </FontFormats>
      <FontImage fluid={data.fontImage?.fluid} />
      <CardInfo>
        <InfoItem>{data.fontWeights}</InfoItem>
        {console.log("fontCurrency", data.fontCurrency)}
        <InfoItem>{data.fontCurrency?.length ? (
          <>
            {data.fontCurrency?.map((el, idx) => {
              return (
                <span key={idx}>{el}</span>
              )
            })}
          </>
        ) : (
          <span>Валют нет :(</span>
        )}</InfoItem>
      </CardInfo>
      <StretchWrapper>
        {console.log("fontName", data.fontName)}
        <TestFontField
          // minRows={2}
          fontName={data.fontName}
          letterSpacing={data.fontLetterSpacing}
          lineHeight={data.fontLineHeight}
          // textTransform={data.textTransform}
          fontSize={data.fontSize}
          fontCSS={data.fontCSS?.fontCSS}
          placeholder="Здесь можно примерить свой текст, если нужно."
        />
        <CardFooter>
          <DownloadButton target="_blank" href={data.fontLink}>
            Скачать
          </DownloadButton>
          <FontAuthors>
            {renderRichText(data.fontAuthors, options)}
            {/* <i>{data.authorsTextBeforeUrl}</i>{" "}
            <a href={data.authorUrl} target="_blank">
              {truncate(data.authorTextUrl)}
            </a> */}
          </FontAuthors>
        </CardFooter>
        
      </StretchWrapper>
      
    </Wrapper>
  );
};

export default Card;

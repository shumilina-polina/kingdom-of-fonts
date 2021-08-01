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

const Card = ({ data }) => {

  const truncate = (link) => {
    console.log("length", link.length)
    if (link.length > 30) {
      return link.slice(0, 30) + "..."
    }
    return link
  }

  
  return (
    <Wrapper color={data.color}>
      <FontFormats>
        {data.fontFormats.map((format, idx) => {
          return <Format>{format}</Format>;
        })}
      </FontFormats>
      <FontImage fluid={data.image} />
      <CardInfo>
        <InfoItem>{data.variationsCount}</InfoItem>
        <InfoItem>{data.currency}</InfoItem>
      </CardInfo>
      <StretchWrapper>
        <TestFontField
          // rows={5}
          font={data.name}
          letterSpacing={data.letterSpacing}
          lineHeight={data.lineHeight}
          fontSize={data.fontSize}
          placeholder="Здесь можно примерить свой текст, если нужно."
        />
        <CardFooter>
          <DownloadButton download href={`/fonts/${data.name}.zip`}>
            Скачать
          </DownloadButton>
          <FontAuthors>
            <i>{data.authorsTextBeforeUrl}</i>{" "}
            <a href={data.authorUrl} target="_blank">
              {truncate(data.authorTextUrl)}
            </a>
          </FontAuthors>
        </CardFooter>
        
      </StretchWrapper>
      
    </Wrapper>
  );
};

export default Card;

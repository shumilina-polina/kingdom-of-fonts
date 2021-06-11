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
} from "./styles";

const Card = ({ data }) => {
  return (
    <Wrapper color={data.color}>
      <FontFormats>
        {data.fontFormats.map((format, idx) => {
          return <Format>{format}</Format>;
        })}
      </FontFormats>
      {/* <Image src={data.image} /> */}
      <CardInfo>
        <InfoItem>{data.variationsCount}</InfoItem>
        <InfoItem>{data.currency}</InfoItem>
      </CardInfo>
      <TestFontField
        rows={4}
        placeholder="Здесь можно примерить свой текст, если нужно."
      />
      <DownloadButton download href={data.downloadUrl}>
        СКАЧАТЬ
      </DownloadButton>
      <FontAuthors>dfsdfd</FontAuthors>
    </Wrapper>
  );
};

export default Card;

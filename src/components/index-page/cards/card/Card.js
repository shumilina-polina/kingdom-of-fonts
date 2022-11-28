import React, { useEffect } from "react";
import {
  FontFormats,
  Format,
  Wrapper,
  CardInfo,
  InfoItem,
  TestFontField,
  DownloadButton,
  FontAuthors,
  FontImage,
  CardFooter,
  StretchWrapper
} from "./styles";
import { pluralize } from "../../../../utils";

const Card = ({ data }) => {
  const truncate = (link) => {
    // console.log("length", link.length)
    if (link.length > 30) {
      return link.slice(0, 30) + "..."
    }
    return link
  }

  // TODO: only add these once (move this somewhere else)
  useEffect(() => {
    // TODO: only if `preview_file` isn't null
    const font = new FontFace(data.name, `url(${data.preview_file})`)
    document.fonts.add(font)
  }, [data.name, data.preview_file])

  return (
    <Wrapper color={data.card_color} outline={!data.is_active}>
      <FontFormats>
        {data.formats.map((format, idx) => {
          return <Format key={idx}>{format}</Format>;
        })}
      </FontFormats>
      <FontImage src={data.image} />
      <CardInfo>
        <InfoItem>
          {data.weights} {pluralize(data.weights, "начертание", "начертания", "начертаний")}
        </InfoItem>
        {data.currencies.length ? (
          <InfoItem>
            {data.currencies.map((el, idx) => {
              return (
                <span key={idx}>{el}</span>
              )
            })}
          </InfoItem>
        ) : (
          <InfoItem noCurrency>
            <span>Валют нет :(</span>
          </InfoItem>
        )}
      </CardInfo>
      <StretchWrapper>
        <TestFontField
          // minRows={2}
          fontName={data.name}
          letterSpacing={data.preview_letter_spacing}
          lineHeight={data.preview_line_height}
          // textTransform={data.textTransform}
          fontSize={data.preview_size}
          fontUppercase={data.preview_uppercase}
          fontCSS={data.preview_extra_css}
          placeholder="Здесь можно примерить свой текст, если нужно."
        />
        <CardFooter>
          <DownloadButton target="_blank" href={data.download_url}>
            Скачать
          </DownloadButton>
          <FontAuthors>
            <p>
              Free by&nbsp;
              <a href={data.author_url} target="_blank" rel="noopener noreferrer">
                {truncate(data.author_name)}
              </a>
            </p>
          </FontAuthors>
        </CardFooter>

      </StretchWrapper>

    </Wrapper>
  );
};

export default Card;

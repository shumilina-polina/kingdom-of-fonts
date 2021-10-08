import styled from "styled-components";
import Img from "gatsby-image";
import TextareaAutosize from "react-textarea-autosize";

export const Wrapper = styled.div`
  background: var(--color-grey);
  padding: 14px;
  border-radius: 5px;
  box-shadow: 0px 2.47088px 6.17719px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  ${(props) =>
    props.color &&
    `
        background: ${props.color};
    `};
`;

export const FontFormats = styled.div`
  display: flex;
  margin-bottom: 10px;
`;

export const Format = styled.div`
  background: rgba(256, 256, 256, 0.05);
  border-radius: 5px;
  padding: 3px 9px;
  margin-right: 6px;
  font-size: 11px;
  color: white;
  :last-child {
    margin-right: 0;
  }
`;

export const Image = styled(Img)`
  width: 100%;
  max-height: 100px;
  height: 100px;
`;

export const CardInfo = styled.div`
  display: flex;
  margin-bottom: 10px;

`;

export const InfoItem = styled.div`
  flex-grow: 1;
  border: 1px solid var(--color-white-transparent);
  border-radius: 5px;
  text-align: center;
  padding: 4px;
  font-size: 12px;
  color: rgba(256, 256, 256, 0.5);
  width: 50%;
  span {
    margin: 0 2px;
    font-size: 12px;
    color: rgba(256, 256, 256, 0.5);
  }
  ${props => props.noCurrency && `
    color: rgba(256, 256, 256, 0.2);
  `}
  :first-child {
    margin-right: 12px;
  }
`;

export const TestFontField = styled.textarea`
  background: none;
  border: 1px solid var(--color-white-transparent);
  border-radius: 5px;
  padding: 8px 12px;
  resize: none;
  width: 100%;
  margin-bottom: 10px;
  color: white;
  letter-spacing: normal;
  line-height: 1.1;
  /* max-height: 100px; */
  min-height: 90px;
  height: 90px;
  max-height: 90px;
  /* height: 100%; */
  /* height: auto; */
  overflow: hidden;
  
  flex-grow: 1;
  ::placeholder {
    color: white;
  }
  ${(props) =>
    props.fontName &&
    `
    font-family: ${props.fontName};
    ::placeholder {
      font-family: ${props.fontName};
    }
  `}
  ${(props) =>
    props.fontSize &&
    `
    font-size: ${props.fontSize}px;
    ::placeholder {
      font-size: ${props.fontSize}px;
    }
  `}
    ${(props) =>
    props.letterSpacing &&
    `
    letter-spacing: ${props.letterSpacing};
  `}
      ${(props) =>
    props.lineHeight &&
    `
    line-height: ${props.lineHeight};
  `}
    ${(props) =>
    props.textTransform &&
    `
    text-transform: ${props.textTransform};
  `}
  ${props => props.fontCSS && `
    ${props.fontCSS}
  `}

  :focus::placeholder {
    color: transparent;
  };

  /* font-family: "Press Start 2P"; */
  
`;

export const DownloadButton = styled.a`
  background: var(--color-white-transparent);
  color: white;
  padding: 7px;
  width: 100%;
  display: block;
  border-radius: 5px;
  text-align: center;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.05rem;
  margin-bottom: 5px;
  text-transform: uppercase;
  text-decoration: none;
  :hover {
    cursor: pointer;
    font-size: 12px;
    color: white;
    font-weight: 500;
    letter-spacing: 0.05rem;
    background: rgba(256,256,256,0.15);
  }
`;

export const FontAuthors = styled.div`
  text-align: center;
  /* color: rgba(256, 256, 256, 0.5);
  font-weight: 500; */
  
  p {
    font-size: 12px;
    color: rgba(256, 256, 256, 0.5);
    font-weight: 500;
    font-style: italic;
  }
  /* i {
    color: rgba(256, 256, 256, 0.5);
    font-size: 12px;
  } */
  a {
    color: rgba(256, 256, 256, 0.5);
    font-size: 12px;
    text-decoration: none;
    font-style: normal;
    :hover {
      cursor: pointer;
      text-decoration: underline;
      color: rgba(256, 256, 256, 0.5);
      font-size: 12px;
    }
  }

`;

export const FontImage = styled(Img)`
  width: 100%;
  margin-bottom: 10px;
  border-radius: 5px;
  height: 160px;
`

export const StretchWrapper = styled.div`
  display: flex;
  flex-direction: column;
  /* background: black; */
  height: auto;
  /* height: 200px; */
  /* min-height: 200px; */
  min-height: auto;
  flex-grow: 1;
`

export const CardFooter = styled.div`
  /* flex-grow: 1; */
  margin-top: auto;
`

import styled from "styled-components";

export const Wrapper = styled.div`
  background: var(--color-grey);
  padding: 14px;
  border-radius: 5px;
  box-shadow: 0px 2.47088px 6.17719px rgba(0, 0, 0, 0.45);
  ${(props) =>
    props.color &&
    `
        background: ${props.color};
    `};
`;

export const FontFormats = styled.div`
  display: flex;
`;

export const Format = styled.div`
  background: rgba(256, 256, 256, 0.05);
  border-radius: 3px;
  padding: 3px 5px;
  margin-right: 3px;
  font-size: 8px;
  color: white;
  :last-child {
    margin-right: 0;
  }
`;

export const Image = styled.img`
  width: 100%;
`;

export const CardInfo = styled.div`
  display: flex;
  margin-bottom: 5px;
`;

export const InfoItem = styled.div`
  flex-grow: 1;
  border: 1px solid var(--color-white-transparent);
  border-radius: 5px;
  text-align: center;
  padding: 5px;
  font-size: 8px;
  :first-child {
    margin-right: 3px;
  }
`;

export const TestFontField = styled.textarea`
  background: none;
  border: 1px solid var(--color-white-transparent);
  border-radius: 5px;
  padding: 8px 10px;
  resize: none;
  width: 100%;
`;

export const DownloadButton = styled.a`
  background: var(--color-white-transparent);
  color: white;
  padding: 5px;
  width: 100%;
  border-radius: 5px;
  :hover {
    cursor: pointer;
  }
`;

export const FontAuthors = styled.div``;

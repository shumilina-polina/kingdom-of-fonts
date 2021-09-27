import styled from "styled-components";
import { AnchorLink } from "gatsby-plugin-anchor-links";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 5px;
`;

export const SubCategory = styled.div`
  margin: 0 12px;
  margin-bottom: 20px;
  :hover {
    cursor: pointer;
    a {
      color: var(--color-orange);
      border-bottom: 1px solid rgba(235, 91, 11, 0.4);
      font-size: 14px;
    }
  }
`

export const SubCategoryItem = styled.a`
    font-size: 14px;
    color: var(--color-green);
    padding-bottom: 1px;
    border-bottom: 1px solid rgba(69, 231, 134, 0.4);
    white-space: nowrap;
    text-decoration: none;
    /* :hover {
      font-size: 14px;
      color: var(--color-green);
      text-decoration: none;
    } */
  ${(props) =>
    props.selected &&
    `
        color: var(--color-grey);
        border: none;

    `}
`;

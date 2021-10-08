import { Link } from "gatsby";
import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;

`;

export const CategoryItem = styled(Link)`
  color: white;
  /* margin-right: 32px; */
  font-size: 18px;
  padding: 2px 8px;
  margin: 0 10px;
  text-decoration: none;
  :hover {
    color: white;
    font-size: 18px;
    cursor: pointer;
    background: rgba(256,256,256,0.05);
    border-radius: 3px;
  }
  ${(props) =>
    props.selected &&
    `
        color: var(--color-grey);
    `}
`;

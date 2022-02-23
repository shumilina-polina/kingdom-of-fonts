import { Link } from "gatsby";
import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  ${props => props.withMargin && `
    margin-bottom: 12px;
  `}

  @media (max-width: 575px) {
    justify-content: start;
    overflow-x: scroll;
    scrollbar-width: none;
    padding: 0 3vw;
    margin-bottom: 5vw;
    ::-webkit-scrollbar { 
      display: none;
    }
  }

`;

export const CategoryItem = styled(Link)`
  color: white;
  font-size: 20px;
  padding: 2px 8px;
  margin: 0 7px;
  text-decoration: none;
  :hover {
    color: white;
    font-size: 20px;
    cursor: pointer;
    background: rgba(256,256,256,0.05);
    border-radius: 3px;
  }
  ${(props) =>
    props.selected &&
    `
        color: var(--color-grey);
    `}

@media (max-width: 575px) {
  font-size: 5vw;
  padding: 0 3vw;
  margin: 0;
  :last-child {
    margin-right: 3vw;
  }
  :hover {
    font-size: 5vw;
    border-radius: 1vw;
    background: none;
  }
}
`;

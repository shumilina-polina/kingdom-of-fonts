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
    padding: 0 5vw;
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
  
  ${(props) => !props.selected && `
    :hover {
      color: white;
      cursor: pointer;
      background: rgba(256,256,256,0.05);
      border-radius: 3px;
    }
  `}
  
  ${(props) => props.selected && `
    color: var(--color-grey);
  `}

  @media (max-width: 575px) {
    font-size: 6.25vw;
    padding: 0 3vw;
    margin: 0;
    :hover {
      border-radius: 1vw;
      background: none;
    }
  }
`;

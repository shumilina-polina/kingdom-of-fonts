import { Link } from "gatsby";
import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;

  @media (max-width: 575px) {
    justify-content: start;
    overflow-x: scroll;
    scrollbar-width: none;
    padding: 0 1.5vw;
    margin-bottom: 5vw;
    ::-webkit-scrollbar { 
      display: none;
    }
  }

`;

export const CategoryItem = styled(Link)`
  color: white;
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

@media (max-width: 575px) {
  font-size: 6vw;
  padding: 0;
  margin-right: 4.5vw;
  :last-child {
    margin-right: 0;
  }
  :hover {
    font-size: 6vw;
    border-radius: 1vw;
    background: none;
  }
}
`;

import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;

  @media (max-width: 575px) {
    justify-content: start;
    padding: 1vw 3vw;
    overflow-x: scroll;
    scrollbar-width: none;
    ::-webkit-scrollbar { 
      display: none;
    }
  }
`;

export const SubCategoryItem = styled.a`
  font-size: 16px;
  color: var(--color-green);
  margin: 0 12px 4px 12px;
  padding-bottom: 1px;
  border-bottom: 1px solid rgba(69, 231, 134, 0.4);
  white-space: nowrap;
  text-decoration: none;
  cursor: pointer;
    
  ${(props) => !props.selected && `
    &:hover {
      color: var(--color-orange);
      border-bottom: 1px solid rgba(235, 91, 11, 0.4);
    }
  `}
    
  ${(props) => props.selected && `
    color: var(--color-grey);
    border: none;
  `}
  
  @media (max-width: 575px) {
    margin: 0 0 2vw 0;
    padding: 0 3vw;
    :last-child {
      margin-right: 0;
    }
    font-size: 4.4vw;
  }
  
  @media (max-width: 575px) {
    font-size: 4.3vw;
  }
`;

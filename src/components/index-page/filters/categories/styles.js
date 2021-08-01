import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 15px;
`;

export const CategoryItem = styled.div`
  color: white;
  /* margin-right: 32px; */
  font-size: 18px;
  padding: 2px 8px;
  margin: 0 10px;
  :hover {
    color: white;
    cursor: pointer;
    background: rgba(256,256,256,0.05);
  }
  ${(props) =>
    props.selected &&
    `
        color: var(--color-grey);
    `}
`;

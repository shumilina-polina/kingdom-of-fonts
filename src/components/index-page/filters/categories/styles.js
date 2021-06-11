import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 25px;
`;

export const CategoryItem = styled.div`
  color: white;
  margin-right: 32px;
  font-size: 24px;
  :last-child {
    margin-right: 0;
  }
  :hover {
    color: var(--color-grey);
    cursor: pointer;
  }
  ${(props) =>
    props.selected &&
    `
        color: var(--color-grey);
    `}
`;

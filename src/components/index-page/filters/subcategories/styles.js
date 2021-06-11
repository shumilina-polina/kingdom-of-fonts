import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const SubCategoryItem = styled.div`
  color: var(--color-blue);
  text-decoration: underline;
  font-size: 18px;
  margin-right: 32px;
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

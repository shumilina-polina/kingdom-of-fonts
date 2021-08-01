import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 48px;
  position: sticky;
  top: 0;
  z-index: 3;
  background: var(--color-background);
  padding: 20px 0 10px;
`;

export const SubCategory = styled.div`
  margin: 0 15px;
  margin-bottom: 10px;
  :hover {
    cursor: pointer;
    span {
      color: var(--color-orange);
      border-bottom: 1px solid rgba(235, 91, 11, 0.4);
    }
  }
`

export const SubCategoryItem = styled.span`
    font-size: 14px;
    color: var(--color-green);
    padding-bottom: 1px;
    border-bottom: 1px solid rgba(69, 231, 134, 0.4);
  ${(props) =>
    props.selected &&
    `
        color: var(--color-grey);
        border: none;

    `}
`;

import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 30px;

  @media (max-width: 1200px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media (max-width: 900px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 575px) {
    grid-template-columns: 1fr;
    grid-gap: 8vw;
  }
`;

export const SubcategoryTitle = styled.div`
  padding: 0 60px;
  background: var(--color-background);
  position: relative;
  z-index: 2;
  margin-bottom: 28px;
  color: rgba(256,256,256,0.15);

  @media (max-width: 575px) {
    padding: 0 5vw;
    margin-bottom: 8vw;
    font-size: 4.3vw;
  }
`

export const SubcategoryItems = styled.div`
  /* padding-bottom: 48px; */
  position: relative;
  padding-top: 48px;

  @media (max-width: 575px) {
    padding-top: 10vw;
  }
  /* :first-child {
    padding-top: 0;
  } */
`

export const SubcategorySectionItem = styled.div`
  /* background: red; */
  /* height: 10px; */
  display: flex;
  justify-content: center;
  position: relative;

  :after {
    content: '';
    width: 100%;
    height: 10px;
    border-bottom: 1px solid rgba(256, 256, 256, 0.1);
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;

  }
  @media (max-width: 575px) {
    :after {
      height: 3vw;
      border-bottom: 2px solid rgba(256, 256, 256, 0.1);
    }
  }

`

export const SubcategoryItemsId = styled.div`
  position: absolute;
  top: -23px;
  @media (max-width: 575px) {
    top: -12vw;
  }
`

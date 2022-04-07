import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 280px);
  grid-gap: 40px;
  margin: 32px 0;
  width: 100%;
  justify-content: center;

  @media (max-width: 1260px) {
    grid-template-columns: repeat(3, 266px)
  }
  
  @media (max-width: 1050px) {
    grid-template-columns: repeat(2, 266px)
  }

  @media (max-width: 575px) {
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 8vw;
    padding: 0 3vw;
    margin: 7.5vw 0;
  }
`;

export const SubcategoryTitle = styled.div`
  padding: 0 26px;
  background: var(--color-background);
  position: relative;
  z-index: 2;
  color: rgba(256,256,256,0.15);

  @media (max-width: 575px) {
    padding: 0 5vw;
    font-size: 5.3vw;
  }
`

export const SubcategoryItems = styled.div`
  position: relative;
  width: 100%;
  /* display: flex; */
  /* flex-direction: column; */
  /* align-items: center; */
  /* justify-content: center; */
`

export const SubcategorySectionItem = styled.div`
  /* background: red; */
  height: 52px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  position: relative;


  :after {
    content: '';
    width: 100%;
    height: 10px;
    border-bottom: 1px solid rgba(256, 256, 256, 0.1);
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 1;


  }
  @media (max-width: 1260px) {
    :after {
      width: 860px;
    }
  }
  @media (max-width: 1050px) {
    :after {
      width: 565px;
    }
  }
  @media (max-width: 575px) {
    margin: 0 2vw;
    height: 16.25vw;
    
    :after {
      bottom: 2.9vw;
      width: 100%;
      border-bottom: 2px solid rgba(256, 256, 256, 0.1);
    }
  }
`

export const SubcategoryItemsId = styled.div`
  position: absolute;
  top: -34px;
  @media (max-width: 575px) {
    top: -6vw;
  }
`

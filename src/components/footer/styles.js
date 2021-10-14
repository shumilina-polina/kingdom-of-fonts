import styled from "styled-components";

export const Wrapper = styled.footer``;

export const FooterWrapper = styled.div`
  margin-top: 60px;
  padding: 50px 0 60px;
  position: relative;
  display: flex;
  border-top: 1px solid rgba(256, 256, 256, 0.1);
  width: 100%;
  @media (max-width: 1200px) {
    padding-right: 20px;
    padding-left: 20px;
     
  }
  @media (max-width: 1050px) {
    width: 100%;
  }
  @media (max-width: 575px) {
    /* padding: 0 4vw; */
    width: 100%;
    padding-right: 0;
    padding-left: 0;
    margin-top: 10vw;
  }
  
  /* @media only screen and (max-width: 575px) {
    margin-top: 5vw;
    margin-bottom: 5vw;
  } */


`;

export const FooterColumn = styled.div`
  /* flex-basis: 1; */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;

  :nth-child(1) {
    /* flex-grow: 2; */
    /* background: blue; */
    width: 17%;
  }
  :nth-child(2) {
    /* flex-grow: 2; */
    width: 25%;
  }
  :nth-child(3) {
    width: 28%;
  }
  :nth-child(4) {
    width: 29%;
    /* align-items: flex-end; */
  }

  @media (max-width: 575px) {
    width: 100% !important;

    :first-child {
      margin-bottom: 10vw;
      /* padding: 0 1vw; */
    }

    :nth-child(2) {
      margin-bottom: 8vw;
      padding: 0 2vw;
    }

    :nth-child(3) {
      background: rgba(256,256,256, 0.08);
      border-radius: 8px;
      padding: 4vw 4vw;
      margin-bottom: 8vw;
    }
    :nth-child(4) {
      display: flex;
      flex-direction: row;
      width: 100%;
      justify-content: space-between;
      align-items: center;
      padding: 0 4vw;

      svg {
        width: 20vw;
      }
    }
  }
  /* align-items: space-between; */
  /* background: red; */
`;

export const Title = styled.div`
  text-transform: uppercase;
  margin-bottom: 40px;
  font-size: 14px;
  margin-left: 8px;

  @media (max-width: 575px) {
    font-size: 4.3vw;
    margin-bottom: 4.2vw;
  }
`;

export const Authors = styled.div`
  display: flex;
  /* flex-wrap: wrap; */
  flex-direction: column;
  max-width: 660px;
  /* margin-bottom: 32px; */
  @media (max-width: 575px) {
    max-width: 100%;
    /* align-items: center; */
    /* justify-content: center; */
  }
`;

export const Author = styled.div`
  margin-right: 20px;
  margin-bottom: 9px;
  font-size: 14px;
  span {
    font-size: 14px;
    /* padding: 0 4px; */
    /* margin: 0 6px; */
  }
  br {
    display: none;
  }

  :last-child {
    margin-bottom: 0;
  }
  a {
    color: white;
    /* margin-left: 3px; */
    text-decoration: none;
    padding: 4px 8px;
    :hover {
      background: rgba(256,256,256,0.05);
      color: white;
      border-radius: 3px;
    }
  }
  @media (max-width: 1200px) {
    br {
      display: block;
    }
    span {
      display: block;
      padding: 0;
      margin-top: 0;
    }

  }

  @media (max-width: 575px) {
    display: flex;
    margin-bottom: 2.5vw;
    margin-right: 0;
    font-size: 4.3vw;
    span {
      font-size: 4.3vw;
      padding: 0;
    }
    a {
      padding: 0 1.6vw;
      :hover {
        background: none;
      }
    }
  }

`

export const Info = styled.div``

export const InfoTitle = styled.div`
  margin-bottom: 7px;
  width: 150px;
  font-size: 14px;
  @media (max-width: 575px) {
    font-size: 4vw;
    width: 100%;
    white-space: nowrap;
  }
`;

export const InfoWrapper = styled.div`
  display: flex;
  /* justify-content: space-between; */
  align-items: flex-end;
  width: 100%;
  svg {
    width: 45px;
    height: 28px;
  }

  /* @media (max-width: 575px) {
    svg {
      width: 11vw;
      height: 11vw;
    }
  } */
`

export const Links = styled.div`
  /* display: flex; */
  /* flex-direction: column; */
  /* flex-grow: 1;
  flex-basis: 0; */
  /* flex: 1; */
  /* margin-right: auto; */
  flex-wrap: pre-wrap;
  margin-bottom: 5px;
  :last-child {
    margin-bottom: 0;
  }
  @media (max-width: 575px) {
    /* font-size: 4vw; */
    width: 100%;
    flex-wrap: normal;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const FooterLink = styled.a`
  display: inline-block;
  /* margin-right: 20px; */
  color: var(--color-green);

  text-decoration: none;
  white-space: nowrap;
  font-size: 14px;
  margin-top: 5px;
  line-height: 1.4;
  position: relative;
  :after {
    content: "";
    position: absolute;
    bottom: -3px;
    left: 0;
    width: 100%;
    border-bottom: 1px solid rgba(69, 231, 134, 0.4);
  }
  :first-child {
    margin-top: 0;
  }
  :hover {
    cursor: pointer;
    color: var(--color-orange);
    font-size: 14px;
    /* border-bottom: 1px solid rgba(235, 91, 11, 0.4); */
    :after {
      border-color: rgba(235, 91, 11, 0.4);;
    }
  }
  @media (max-width: 575px) {
    font-size: 4.1vw;
    margin-top: 0;
    :first-child {
      margin-right: 3vw;
    }
    :hover {
      font-size: 4.1vw;

    }
  }
`




export const InfoYear = styled.div`
  /* flex: 1; */
  /* display: flex; */
  /* justify-content: center; */
  line-height: 1.4;
  font-size: 14px;
  span {
    font-size: 14px;
    margin-bottom: 5px;
    line-height: 1.4;
    display: block;
  }
  @media (max-width: 575px) {
    font-size: 4.3vw;
    line-height: 1.7;
    span {
      font-size: 4.3vw;
      margin-bottom: 0;
      line-height: 1.8;
    }
  }
`

export const LogoWrapper = styled.div`
  svg {
    width: 50px;
  } 

  /* flex-grow: 1;

  flex-basis: 0; */
  /* flex: 1; */
  /* margin-left: auto; */
  /* display: flex; */
  /* justify-content: flex-end; */
`

export const AnnounceWrapper = styled.a`
  ${props => props.image1 && `
    background-image: url(${props.image2});
  `}
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  width: 195px;
  height: 195px;
  position: relative;
  right: 5px;
  top: 10px;
  margin-left: auto;
  transform: scale(1.13);
  text-decoration: none;
  outline: none;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  :hover {
    cursor: pointer;
    ${props => props.image2 && `
      background-image: url(${props.image1});
    `}
  }

  @media (max-width: 575px) {
    right: auto;
    top: auto;
    margin: 0 auto;
    transform: none;
    width: 80vw;
    height: 80vw;
  }
`

export const AnnouncementContent = styled.div`
  transform: rotate(12deg);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  /* position: absolute; */
  position: relative;
  top: -3px;
  left: 0px;
  width: 90%;

  @media (max-width: 575px) {
    /* top: -3vw; */
    left: 0px;
    width: 70vw;

  }
  /* top: 50px;
  left: 0; */

`

export const AnnouncementTitle = styled.div`
  text-align: center;
  color: rgba(0,0,0,0.5);
  font-weight: normal;
  font-size: 30px;
  text-transform: uppercase;

  @media (max-width: 575px) {
    font-size: 13vw;
  }
`


export const AnnouncementText = styled.div`
  text-align: center;
  font-size: 15px;
  color: white;
  padding: 0 20px;
  span {
    font-size: 15px;
    color: white;
    display: inline-block;
    text-decoration: underline;
    :hover {
      text-decoration: none;
    }


  }
  @media (max-width: 575px) {
    font-size: 6.5vw;
    padding: 0 3vw;
    line-height: 1.1;
    span {
      font-size: 6.5vw;
    }
  }
`
export const DesktopFooter = styled.div`
  display: flex;
  width: 100%;

  @media (max-width: 575px) {
    display: none;
  }
`

export const MobileFooter = styled.div`
  display: none;
  width: 100%;

  @media (max-width: 575px) {
    display: block;
  }
`

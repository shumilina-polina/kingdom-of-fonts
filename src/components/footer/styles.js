import styled from "styled-components";

export const Wrapper = styled.footer``;

export const FooterWrapper = styled.div`
  margin-top: 60px;
  padding: 50px 0 60px;
  position: relative;
  display: flex;
  border-top: 1px solid rgba(256, 256, 256, 0.1);


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
    width: 20%;
  }
  :nth-child(2) {
    /* flex-grow: 2; */
    width: 25%;
  }
  :nth-child(3) {
    width: 30%;
  }
  :nth-child(4) {
    width: 25%;
    /* align-items: flex-end; */
  }
  /* align-items: space-between; */
  /* background: red; */
`;

export const Title = styled.div`
  text-transform: uppercase;
  margin-bottom: 30px;
  font-size: 14px;
  margin-left: 8px;
`;

export const Authors = styled.div`
  display: flex;
  /* flex-wrap: wrap; */
  flex-direction: column;
  max-width: 660px;
  /* margin-bottom: 32px; */
`;

export const Author = styled.div`
  margin-right: 20px;
  margin-bottom: 12px;
  font-size: 14px;
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
      border-radius: 3px;
    }
  }
`

export const Info = styled.div``

export const InfoTitle = styled.div`
  margin-bottom: 7px;
  width: 150px;
  font-size: 14px;
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
  /* position: absolute; */
  /* top: 70px;
  right: 55px; */
  position: relative;
  right: 5px;
  margin-left: auto;
  transform: scale(1.12);
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
  left: -3px;
  width: 80%;
  /* top: 50px;
  left: 0; */

`

export const AnnouncementTitle = styled.div`
  text-align: center;
  color: rgba(0,0,0,0.5);
  font-weight: normal;
  font-size: 30px;
  text-transform: uppercase;
`


export const AnnouncementText = styled.div`
  text-align: center;
  font-size: 14px;
  color: white;
  padding: 0 20px;
  span {
    font-size: 14px;
    color: white;
    display: inline-block;
    text-decoration: underline;
    :hover {
      text-decoration: none;
    }
    /* text-decoration: none;
    border-bottom: 1px solid white;
    padding: 0;
    :hover {
      border-bottom: none;
    } */
  }
`


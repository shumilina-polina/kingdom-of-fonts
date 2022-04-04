import styled from "styled-components";

import { ButtonPrimaryStyle } from "../access-page/style"

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
  justify-content: flex-start;
  align-items: flex-start;
`;

export const FooterColumnSpacer = styled.div`
  flex: 1;
`

export const Title = styled.div`
  text-transform: uppercase;
  margin-bottom: 32px;
  font-size: 20px;
  margin-left: 8px;
  
  font-variant: small-caps;
  text-transform: lowercase;

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
  font-size: 16px;
  span {
    color: #797B7B;
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
    color: #BDBDBD;
    /* margin-left: 3px; */
    text-decoration: none;
    padding: 4px 8px;
    :hover {
      background: rgba(255, 255, 255, 0.05);
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

export const SocialLinksWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const SocialLink = styled.a`
  width: 57px;
  height: 57px;
  
  background-size: contain;
  
  ${props => props.image && `
    background-image: url(${props.image});
  `}
  
  ${props => (props.imageHover || props.image) && `
    &:hover {
      background-image: url(${props.imageHover || props.image});
    }
  `}
`

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
    /* border-bottom: 1px solid rgba(235, 91, 11, 0.4); */
    :after {
      border-color: rgba(235, 91, 11, 0.4);;
    }
  }
  @media (max-width: 575px) {
    font-size: 3.9vw;
    margin-top: 0;
    :first-child {
      margin-right: 3vw;
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
    margin-bottom: 5px;
    display: block;
  }
  @media (max-width: 575px) {
    font-size: 4.3vw;
    line-height: 1.7;
    span {
      margin-bottom: 0;
      line-height: 1.8;
    }
  }
`

export const LogoWrapper = styled.div`
  svg {
    width: 56px;
    height: 56px;
  }
    
  display: flex;
  align-items: center;
  
  text-decoration: none;
`

export const LogoText = styled.div`
  margin-left: 12px;
  line-height: 18px;
  
  padding-bottom: 1px;
`

export const AnnounceWrapper = styled.a`
  ${props => props.image1 && `
    background-image: url(${props.image2});
  `}
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  width: 260px;
  height: 260px;
  position: relative;
  right: 5px;
  top: 10px;
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
  color: rgba(0,0,0,0.7);
  font-weight: normal;
  font-size: 38px;
  text-transform: uppercase;

  @media (max-width: 575px) {
    font-size: 13vw;
  }
`


export const AnnouncementText = styled.div`
  text-align: center;
  font-size: 20px;
  color: white;
  padding: 0 20px;
  span {
    display: inline-block;
    text-decoration: underline;
    ${AnnounceWrapper}:hover & {
      text-decoration: none;
    }
  }
  @media (max-width: 575px) {
    font-size: 6.5vw;
    padding: 0 3vw;
    line-height: 1.1;
  }
`

export const BlurredLight = styled.div`
  width: 200px;
  height: 200px;

  border-radius: 9999px;
  
  background: radial-gradient(118.83% 115.73% at 57.11% 128.26%, #45E786 0%, rgba(69, 231, 134, 0) 92.71%);
  filter: blur(20px);
  transform: rotate(-88deg);
`

export const ErrataWrapper = styled.div`
  position: relative;
`

export const ErrataBox = styled.div`
  padding: 16px 16px;

  width: 250px;
  height: 269px;

  background-color: #151515;
  box-shadow: inset 0 0 50px rgba(255, 255, 255, 0.08);
  border-radius: 16px;
  
  transform: skewx(-10deg);
  
  overflow: hidden;
`

export const ErrataBoxShadow = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  width: 250px;
  height: 269px;
  
  transform: skewx(-10deg) translate(15px, 15px);

  border-radius: 16px;
  border: 2px solid rgba(255, 255, 255, 0.08);
`

export const ErrataBlurredLight = styled(BlurredLight)`
  position: absolute;
  
  top: 6px;
  right: 18px;
`

export const ErrataContent = styled.div`
  position: relative;
`

export const ErrataTextTop = styled.div``

export const ErrataTextBig = styled.div`
  font-size: 28px;
  line-height: 33px;
  color: white;
`

export const ErrataTelegramButton = styled.a`
  ${ButtonPrimaryStyle}
  
  display: block;
  
  width: 100%;
  height: auto;
  
  padding: 13px 19px;
  margin: 10px 0 5px 0;
  
  font-size: 20px;
  letter-spacing: 0.03rem;
  font-variant: small-caps;
  text-transform: lowercase;
`

export const ErrataTextBottom = styled.div`
  text-align: center;
  
  a {
    cursor: pointer;
    color: inherit;
    
    ${props => props.underlineLinks && `
      text-decoration: underline;
    `}
  }
  
  a:hover {
    // filter: brightness(70%);
    text-decoration: none;
  }
`

export const Copyright = styled.div`

`

export const DesktopFooter = styled.div`
  display: flex;
  justify-content: space-between;

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

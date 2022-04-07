import styled from "styled-components";

import { BlurredLight, ButtonPrimaryStyle } from "../access-page/style";

import _Logo from "../../assets/svgs/pavlushin.svg";

export const Wrapper = styled.footer``;

export const FooterWrapper = styled.div`
  margin-top: 60px;
  padding: 50px 0 60px;
  position: relative;
  display: flex;
  justify-content: space-between;
  border-top: 1px solid rgba(256, 256, 256, 0.1);
  width: 100%;

  @media (max-width: 1260px) {
    margin-top: 15vw;
    padding: 5vw 0;
    flex-direction: column;
  }
`;

export const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  
  @media (max-width: 1260px) {
    margin: 5vw 0;
  }
`;

export const LinksFooterColumn = styled(FooterColumn)`
  @media (max-width: 1260px) {
    order: 4;
  }
`

export const AnnounceFooterColumn = styled(FooterColumn)`
  @media (max-width: 1260px) {
    order: 3;
  }
`

export const CreditsFooterColumn = styled(FooterColumn)`
  @media (max-width: 1260px) {
    order: 2;
  }
`

export const ErrataFooterColumn = styled(FooterColumn)`
  @media (max-width: 1260px) {
    order: 1;
    margin-left: 6.3vw;
  }
`

export const CopyrightFooterColumn = styled(FooterColumn)`
  @media (max-width: 1260px) {
    flex-direction: row;
    align-items: center;
    order: 5;
  }
`

export const FooterColumnSpacer = styled.div`
  flex: 1;
`

export const Title = styled.div`
  text-transform: uppercase;
  margin-bottom: 32px;
  font-size: 20px;
  margin-left: 6px;
  
  font-variant: small-caps;
  text-transform: lowercase;

  @media (max-width: 1260px) {
    font-size: 6.25vw;
    margin-left: 0;
    margin-bottom: 5vw;
  }
`;

export const Authors = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 660px;
  @media (max-width: 1260px) {
    max-width: 100%;
  }
`;

export const Author = styled.div`
  margin-right: 20px;
  margin-bottom: 9px;
  font-size: 16px;
  span {
    color: #797B7B;
    padding: 0 0 0 4px;
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
    padding: 4px 6px;
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

  @media (max-width: 1260px) {
    display: flex;
    margin-bottom: 2.2vw;
    margin-right: 0;
    font-size: 5vw;
    a {
      padding: 0 3.75vw 0 0;
      :hover {
        background: none;
      }
    }
  }
`

export const SocialLinksWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  
  @media (max-width: 1260px) {
    margin: -2.5vw;
  }
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
  
  @media (max-width: 1260px) {
    width: 18vw;
    height: 18vw;
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

export const Logo = styled(_Logo)`
  filter: brightness(25%);
`

export const LogoText = styled.div`
  margin-left: 12px;
  line-height: 18px;
  
  padding-bottom: 1px;

  @media (max-width: 1260px) {
    font-size: 5vw;
    margin-left: 0;
    line-height: 5.625vw;
  }
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

  @media (max-width: 1260px) {
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

  @media (max-width: 1260px) {
    left: 0;
    width: 70vw;
  }
`

export const AnnouncementTitle = styled.div`
  text-align: center;
  color: rgba(0,0,0,0.7);
  font-weight: normal;
  font-size: 38px;
  text-transform: uppercase;

  @media (max-width: 1260px) {
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
  @media (max-width: 1260px) {
    font-size: 6.5vw;
    padding: 0 3vw;
    line-height: 1.1;
  }
`

export const ErrataWrapper = styled.div`
  position: relative;
  
  @media (max-width: 1260px) {
    font-size: 5vw;
    margin-bottom: 5vw;
  }
`

export const ErrataBox = styled.div`
  padding: 1em;

  width: 15.4em;
  height: 16.8125em;

  background-color: #151515;
  box-shadow: inset 0 0 3.125em rgba(255, 255, 255, 0.08);
  border-radius: 1em;
  
  transform: skewx(-10deg);
  
  overflow: hidden;
`

export const ErrataBoxShadow = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  width: 15.4em;
  height: 16.8125em;
  
  transform: skewx(-10deg) translate(1em, 1em);

  border-radius: 1em;
  border: 0.125em solid rgba(255, 255, 255, 0.08);
`

export const ErrataBlurredLight = styled(BlurredLight)`
  position: absolute;
  
  top: 0.375em;
  right: 1.125em;
`

export const ErrataContent = styled.div`
  position: relative;
`

export const ErrataTextTop = styled.div``

export const ErrataTextBig = styled.div`
  font-size: 1.75em;
  line-height: 1.15em;
  color: white;
`

export const ErrataTelegramButton = styled.a`
  ${ButtonPrimaryStyle}
  
  display: block;
  
  width: 100%;
  height: auto;
  
  padding: 0.65em 0;
  margin: 0.5em 0 0.25em 0;
  
  font-size: 1.25em;
  text-align: center;
  letter-spacing: 0.03rem;
  font-variant: small-caps;
  text-transform: lowercase;
  
  @media (max-width: 1260px) {
      border-radius: 2.5vw;
  }
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

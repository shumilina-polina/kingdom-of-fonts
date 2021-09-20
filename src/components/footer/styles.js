import styled from "styled-components";

export const Wrapper = styled.footer``;

export const FooterWrapper = styled.div`
  padding: 66px 0 60px;
  position: relative;
`;

export const Title = styled.div`
  text-transform: uppercase;
  margin-bottom: 30px;
`

export const Authors = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 660px;
  margin-bottom: 32px;
`

export const Author = styled.div`
  margin-right: 20px;
  margin-bottom: 15px;
  a {
    color: white;
    margin-left: 3px;
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
`

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
  display: flex;
  /* flex-grow: 1;
  flex-basis: 0; */
  flex: 1;
  margin-right: auto;

`

export const FooterLink = styled.a`
  margin-right: 20px;
  color: var(--color-green);
  border-bottom: 1px solid rgba(69, 231, 134, 0.4);
  text-decoration: none;
  :hover {
    cursor: pointer;
    color: var(--color-orange);
    border-bottom: 1px solid rgba(235, 91, 11, 0.4);
  }
`




export const InfoYear = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`

export const LogoWrapper = styled.div`
  /* flex-grow: 1;
  flex-basis: 0; */
  flex: 1;
  margin-left: auto;
  display: flex;
  justify-content: flex-end;
`

export const AnnounceWrapper = styled.a`
  ${props => props.image1 && `
    background-image: url(${props.image2});
  `}
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  width: 158px;
  height: 160px;
  position: absolute;
  top: 70px;
  right: 55px;
  transform: scale(1.2);
  text-decoration: none;
  outline: none;
  border: none;
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
  position: absolute;
  top: 30px;
  left: 0;

`

export const AnnouncementTitle = styled.div`
  text-align: center;
  color: rgba(0,0,0,0.5);
  font-weight: normal;
  font-size: 24px;
  text-transform: uppercase;
`


export const AnnouncementText = styled.div`
  text-align: center;
  font-size: 12px;
  color: white;
  padding: 0 20px;
  span {
    font-size: 12px;
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


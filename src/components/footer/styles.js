import styled from "styled-components";

export const Wrapper = styled.footer``;

export const FooterWrapper = styled.div`
  padding: 66px 0 36px;
  position: relative;
`;

export const Title = styled.div`
  text-transform: uppercase;
  margin-bottom: 24px;
`

export const Authors = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 660px;
  margin-bottom: 20px;
`

export const Author = styled.div`
  margin-right: 25px;
  margin-bottom: 20px;
  a {
    color: white;
    margin-left: 7px;
    text-decoration: none;
    :hover {
      color: var(--color-grey);
    }
  }
`

export const Info = styled.div``

export const InfoTitle = styled.div`
  margin-bottom: 10px;
`

export const InfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  svg {
    width: 50px;
    height: 28px;
  }
`

export const Links = styled.div`
  display: flex;

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




export const InfoYear = styled.div``

export const AnnounceWrapper = styled.div`
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
  right: 50px;
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
  font-weight: bold;
  font-size: 24px;
  text-transform: uppercase;
`


export const AnnouncementText = styled.div`
  text-align: center;
  font-size: 12px;
  color: white;
  padding: 0 20px;
  a {
    color: white;
    display: inline-block;
    /* text-decoration: none;
    border-bottom: 1px solid white;
    padding: 0;
    :hover {
      border-bottom: none;
    } */
  }
`


import styled from "styled-components";

export const LogoWrapper = styled.div`
  display: inline-flex;
  justify-content: center;
  width: auto;
  position: relative;
  
  svg {
    width: 100%;
    height: 100%;
  }
  
  @media (max-width: 1260px) {
    width: 17.5vw;
    height: 17.5vw;
  }
`;

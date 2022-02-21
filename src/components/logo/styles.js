import styled from "styled-components";

export const LogoWrapper = styled.div`
  display: inline-flex;
  justify-content: center;
  /* margin-bottom: 5px; */
  width: auto;
  position: relative;

  @media (max-width: 575px) {
    margin-bottom: 0;
    svg {
      width: 50vw;
      height: 28vw;
      z-index: 3;
    }
  }
`;

import styled from "styled-components";

export const LogoWrapper = styled.div`
  display: inline-flex;
  justify-content: center;
  /* margin-bottom: 5px; */
  width: auto;
  position: relative;
  :hover {
    cursor: pointer;
  }

  @media (max-width: 575px) {
    margin-bottom: 0;
    svg {
      width: 50vw;
      height: 28vw;
      z-index: 3;
    }
  }
`;

export const ShadowCircle = styled.div`
    background: rgb(21, 21, 21);
    width: 80%;
    height: 80%;
    border-radius: 50%;
    box-shadow: 0 0 5px rgb(21, 21, 21, 0.5);
    position: absolute;
    top: 50%;
    left: 48%;
    transform: translate(-50%, -50%);
    filter: blur(10px);
    @media (max-width: 575px) {
        width: 40%;
        /* height: 80%; */
        box-shadow: 0 0 8vw rgb(21, 21, 21);
        filter: blur(2vw);
        /* box-shadow: 0 0 8vw red; */
        /* z-index: 1; */
        /* box-shadow: 0 0 5vw red; */
    }
    /* left: -1px; */
    /* z-index: -1; */
`

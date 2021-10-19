import React from 'react'
import styled from 'styled-components';

const Wrapper = styled.div`
    position: relative;
    /* background: red; */
    z-index: 100;
    width: 100%;
    height: 600px;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 575px) {
        height: 140vw;
    }
`

const StyledSpinner = styled.svg`
  animation: rotate 2s linear infinite;
  /* margin: -25px 0 0 -25px; */
  width: 70px;
  height: 70px;
  
  & .path {
    stroke: rgba(256,256,256, .15);
    stroke-linecap: round;
    animation: dash 1.5s ease-in-out infinite;
  }
  
  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }
  @keyframes dash {
    0% {
      stroke-dasharray: 1, 150;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -35;
    }
    100% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -124;
    }
  }
  @media (max-width: 575px) {
    width: 20vw;
    height: 20vw;
    position: relative;
    top: -15vw;
    }
`;

const Spinner = () => {
    return (
        <Wrapper>
            <StyledSpinner viewBox="0 0 50 50">
                <circle
                className="path"
                cx="25"
                cy="25"
                r="20"
                fill="none"
                strokeWidth="4"
                />
            </StyledSpinner>
        </Wrapper>
    )
}

export default Spinner

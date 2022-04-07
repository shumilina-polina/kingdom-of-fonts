import styled, {css} from "styled-components";

import _Curve from "../../assets/svgs/curve.svg";
import _MobileCurve from "../../assets/svgs/curve-mobile.svg";

export const NotFoundText = styled.div`
    font-size: 150px;
    text-align: center;
    color: var(--color-grey);
    font-weight: bold;
    margin-top: -40px;
    span {
        display: block;
        font-size: 30px;
    }
    @media (max-width: 575px) {
        font-size: 35vw;
        margin-bottom: 5vw;
        margin-top: 0;
        span {
            font-size: 6vw;
        }
    }
`

export const AccessInfoOverlay = styled.div`

`

export const AccessImageMobileThanksWrapper = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    display: flex;
    justify-content: center;
    width: 100%;
    /* overflow-x: hidden; */
`

export const AccessImageMobileThanks = styled.img`
    width: 67vw;
`

export const AccessImageMobileEnvelope = styled.img`
    width: 93vw;
    transform: translateX(-.5vw);
    /* right: 0; */
`

export const AccessImageEnvelopeLight = styled.img`
    width: 140vw;
    position: absolute;
    left: 50%;
    z-index: -1;
    bottom: 33vw;
    transform: translateX(-60%);
`

export const AccessInfoWrapper = styled.div`
    background-color: rgba(25, 29, 27, 0.4);
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    backdrop-filter: blur(15px);
    -webkit-backdrop-filter: blur(15px);
    padding: 5vw 4vw 8vw;
    z-index: 2;
    border-radius: 0 0 6vw 6vw;

    @supports(-moz-appearance: none) {
        background-color: rgba(25, 29, 27, 0.9);
    }
`

export const AccessWrapper = styled.div`
    background: rgba(256, 256, 256, 0.01);
    
    margin: 28px 0 20px;

    border-radius: 20px;
    /* display: flex; */
    /* align-items: flex-end; */
    /* justify-content: space-between; */
    box-shadow: 0px 2.47088px 6.17719px rgba(0, 0, 0, 0.25), inset 0 0 50px rgba(256, 256, 256, 0.08);
    overflow: hidden;
    position: relative;
    width: 100%;
    min-height: 533px;
    
    @media (max-width: 1260px) {
        margin: 0;
        min-height: unset;
        border-radius: 6.25vw;
    }
`;

export const AccessImageWrapper = styled.div`
    /* position: relative; */
    height: 40vw;
    overflow: hidden;
`

export const AccessInfo = styled.div`
    padding: 40px 60px;
    position: relative;
    z-index: 1;
    overflow: hidden;
    border-bottom: 2px solid #222222;
    
    @media (max-width: 1260px) {
        padding: 8.75vw 5.625vw;
        border-bottom: none;
    }
`;

export const AccessImageStepOne = styled.img`
    width: 780px;
    /* height: 200px; */
    position: absolute;
    right: -130px;
    z-index: 1;
    bottom: -160px;
    pointer-events: none;

    @media (max-width: 1260px) {
        display: none;
    }
`

export const AccessImageThanks = styled.img`
    width: 780px;
    position: absolute;
    right: -29px;
    z-index: 2;
    bottom: 51%;
    transform: translateY(50%);
    pointer-events: none;

    @media (max-width: 1260px) {
        display: none;
    }
`

export const AccessTitle = styled.div`
    font-size: 38px;
    color: white;
    font-weight: 500;
    font-variant: small-caps;
    text-transform: lowercase;
    margin-bottom: 15px;
    
    @media (max-width: 1260px) {
        font-size: 7.5vw;
        margin-bottom: 1.25vw;
    }
`;

export const AccessText = styled.div`
    color: #BDBDBD;
    font-size: 36px;
    line-height: 46px;
    letter-spacing: -0.07rem;
    width: 704px;
    span {
        color: var(--color-green);
    }
    @media (max-width: 1260px) {
        font-size: 6.875vw;
        width: 100%;
        line-height: 8.75vw;
        letter-spacing: -0.04rem;
    }   
`;

export const AccessFooter = styled.div`
    padding: 25px 60px 40px 60px;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    
    @media (max-width: 1260px) {
        padding: 0 5.625vw 8.75vw 5.625vw;
        flex-direction: column;
    }
`;

const ButtonStyle = css`
    padding: 18px 40px;
    font-size: 24px;
    text-decoration: none;
    font-weight: 500;
    border-radius: 8px;
    width: 248px;
    height: 72px;
    
    :hover {
        cursor: pointer;
    }
`

export const ButtonPrimaryStyle = css`
    ${ButtonStyle}
    color: #063318;
    background: linear-gradient(180deg, #45E786 0%, #14793E 100%);
    &:hover {
        background: linear-gradient(180deg, #38B96C 0%, #126E38 100%);
    }
`

export const ButtonSecondaryStyle = css`
    ${ButtonStyle}
    color: #bdbdbd;
    background: transparent;
    border: 2px solid #bdbdbd;
    &:hover {
        color: #797B7B;
        border-color: #797B7B;
    }
    &:disabled {
        border: 2px solid #222222;
        color: #444444;
        cursor: not-allowed;
    }
`

const AccessButtonStyle = css`
    @media (max-width: 1260px) {
        width: 100%;
        height: 18.75vw;
        font-size: 6.875vw;
        padding: 3.125vw 0;
        border-radius: 2.5vw;
        border-width: 0.625vw !important;
    }
`

export const AccessButton = styled.button`
    ${ButtonSecondaryStyle}
    ${AccessButtonStyle}
`;

export const AccessButtonStepTwo = styled.button`
    ${ButtonPrimaryStyle}
    ${AccessButtonStyle}
`

export const AccessForm = styled.form`
    display: flex;
    
    @media (max-width: 1260px) {
        width: 100%;
        flex-direction: column;
    }
`

export const AccessFormField = styled.div`
    margin-right: 16px;
    
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    
    @media (max-width: 1260px) {
        margin: 0 0 7.5vw 0;
        
        &:last-child {
            margin: 0;
        }
    }
`

export const AccessFormControl = styled.div`
    position: relative;
    
    @media (max-width: 1260px) {
        width: 100%;
    }
`

export const AccessInput = styled.input`
    color: #bdbdbd;
    background: transparent;
    border: 2px solid #222222;
    border-radius: 8px;
    font-size: 26px;
    padding: 16px;
    height: 72px;
    width: 472px;
    
    ${props => props.success && `
        color: #45E786;
        border-color: #45E786 !important;
    `}
    
    ${props => props.danger && `
        color: #EB5B0B;
        border-color: #EB5B0B !important;
    `}
    
    ${props => props.hasIconsLeft && `
        padding-left: 64px;
    `}
    
    ${props => props.hasIconsRight && `
        padding-right: 64px;
    `}
    
    &:focus {
        border-color: #444444;
    }
    
    &::placeholder {
        color: #444444;
    }
    
    @media (max-width: 1260px) {
        width: 100%;
        height: 15vw;
        font-size: 5.625vw;
        border-radius: 2.5vw;
        border-width: 0.625vw;
    }
`

export const AccessInputHelpText = styled.div`
    color: #bdbdbd;
    margin-top: 4px;
    
    a {
        color: inherit;
        text-decoration: underline;
    }
    
    a:hover {
        color: #652806;
    }
    
    ${props => props.disabled && `
        color: #444444;
    `}
    
    ${props => props.success && `
        color: #45E786;
    `}
    
    ${props => props.danger && `
        color: #EB5B0B;
    `}

    @media (max-width: 1260px) {
        font-size: 5vw;
    }
`

export const AccessInputIconStyle = css`
    width: 72px;
    height: 72px;
    
    padding: 24px;
    
    display: flex;
    justify-content: center;
    align-items: center;
    
    filter: brightness(0) saturate(100%) invert(87%) sepia(0%) saturate(81%) hue-rotate(253deg) brightness(85%) contrast(99%);

    ${props => props.right && `
        position: absolute;
        top: 0;
        right: 0;
    `}
    
    ${props => props.right && `
        position: absolute;
        top: 0;
        right: 0;
    `}
    
    ${props => props.success && `
        filter: brightness(0) saturate(100%) invert(79%) sepia(45%) saturate(641%) hue-rotate(81deg) brightness(94%) contrast(92%);
    `}
    
    ${props => props.danger && `
        filter: brightness(0) saturate(100%) invert(32%) sepia(97%) saturate(3117%) hue-rotate(14deg) brightness(109%) contrast(91%);
    `}
    
    svg {
        width: 100%;
        height: 100%;
    }

    @media (max-width: 1260px) {
        width: 15vw;
        height: 15vw;
    
        padding: 5vw;
    }
`

export const AccessInputIcon = styled.div`
    ${AccessInputIconStyle}
`

export const AccessInputIconButton = styled.button`
    ${AccessInputIconStyle}
    
    background: none;
    cursor: pointer;

    &:hover, &:disabled {
        filter: brightness(0) saturate(100%) invert(25%) sepia(1%) saturate(0%) hue-rotate(63deg) brightness(93%) contrast(88%);
      
        ${props => props.danger && `
            filter: brightness(0) saturate(100%) invert(15%) sepia(25%) saturate(4977%) hue-rotate(5deg) brightness(101%) contrast(95%);
        `}
    }
    
    &:disabled {
        cursor: not-allowed;
    }
`

export const AccessPriceWrapper = styled.div`
    display: flex;
    margin-left: 60px;
    
    @media (max-width: 1260px) {
        justify-content: space-between;

        width: 100%;
        margin: 7.5vw 0 0 0;
    }
`;

export const AccessPriceYear = styled.div`
    &:not(:last-child) {
        margin-right: 20px;
    }
    @media (max-width: 1260px) {
        &:not(:last-child) {
            margin-right: 0;
        }
    }
`;

export const AccessPriceTitle = styled.div`
    color: #BDBDBD;
    font-size: 16px;
    margin-left: 5px;
    
    span {
        position: relative;
        :after {
            content: "";
            border-bottom: 1.5px solid var(--color-green);
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            left: 0;
            width: 100%;
        }
    }
    @media (max-width: 1260px) {
        font-size: 3.75vw;
    }
`;

export const AccessPrice = styled.div`
    color: #BDBDBD;
    font-size: 52px;
    letter-spacing: -0.1rem;
    line-height: 1;
    span {
        font-size: 28px;
        margin-left: 3px;
    }

    ${props => props.green && `
        color: var(--color-green);
    `}

    @media (max-width: 1260px) {
        font-size: 13.75vw;
        line-height: 1;
        
        span {
            font-size: 7.5vw;
        }
    }
`;

export const LogoWrapper = styled.div`
    /* width: 100%; */
    display: flex;
    justify-content: space-between;
    align-items: center;

    position: relative;
`;

export const HeaderWrapper = styled.div`
    padding: 28px 0;
    
    @media (max-width: 1260px) {
        padding: 3.2vw 1.25vw;
    }
`;

export const CurveWrapper = styled.div`
    overflow: hidden;
`

export const Curve = styled(_Curve)`
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 1240px;
    display: block;
    @media (max-width: 1260px) {
        display: none;
    }
`

export const CurveMobile = styled(_MobileCurve)`
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 100vw;
    height: auto;
    display: none;
    @media (max-width: 1260px) {
        display: block;
    }
`

export const BlurredLight = styled.div`
    width: 200px;
    height: 200px;
    
    border-radius: 9999px;
    
    background: radial-gradient(118.83% 115.73% at 57.11% 128.26%, #45E786 0%, rgba(69, 231, 134, 0) 92.71%);
    filter: blur(20px);
    transform: rotate(-80deg);
    
    @media (max-width: 1260px) {
        width: 62.5vw;
        height: 62.5vw;
    
        filter: blur(6.25vw);
    }
`

export const AccessBlurredLight = styled(BlurredLight)`
    position: absolute;
    
    top: 12.5vw;
    right: 12.5vw;
    
    display: none;
    
    @media (max-width: 1260px) {
        display: block;
    }
`

import styled, {css} from "styled-components";

import Curve from "../../assets/svgs/curve.svg";
import MobileCurve from "../../assets/svgs/curve-mobile.svg";
import { Link } from "gatsby";

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

    border-radius: 20px;
    /* display: flex; */
    /* align-items: flex-end; */
    /* justify-content: space-between; */
    box-shadow: 0px 2.47088px 6.17719px rgba(0, 0, 0, 0.25), inset 0 0 50px rgba(256, 256, 256, 0.08);
    overflow: hidden;
    position: relative;
    width: 100%;
    min-height: 533px;

    @media (max-width: 575px) {
        padding: 5vw 4vw;
        border-radius: 6vw;
        margin-top: 5vw;
        overflow: unset;
        /* height: 168vw; */
        /* width: 95vw; */
        min-width: 100%;
        width: 100%;
        form {
            width: 100%;
            margin: 5vw 0 0;
        }
        


        ${props => props.wrapperHeight && `
            height: ${props.wrapperHeight};
        `}
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
`;

export const AccessImage = styled.img`
    width: 1150px;
    /* height: 200px; */
    position: absolute;
    right: -400px;
    z-index: 1;
    bottom: -230px;

    @media (max-width: 575px) {
        /* display: none; */
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

    @media (max-width: 575px) {
        width: 100vw;
    /* height: 200px; */
        position: absolute;
        right: 0;
        z-index: 1;
        top: -75vw;
    }
`

export const AccessImageStepTwo = styled.img`
    width: 740px;
    /* height: 200px; */
    position: absolute;
    right: -170px;
    z-index: 1;
    bottom: 59%;
    transform: translateY(50%);

    @media (max-width: 575px) {
        bottom: -17vw;
        right: 50%;
        transform: translateX(50%) rotate(-4deg);
        /* top: 0; */
        width: 110vw;
    /* height: 200px; */
        /* position: static;
        left: 0;
        right: auto;
        z-index: 1;
        top: 0;
        bottom: auto; */
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

    @media (max-width: 575px) {
        bottom: -10vw;
        right: 51%;
        transform: translateX(50%);
        width: 132vw;
    }
`

export const AccessImageThanksLight = styled.img`
    width: 150vw;
    position: absolute;
    left: 50%;
    z-index: -1;
    bottom: 10vw;
    transform: translateX(-50%);
`



export const AccessImageStepTwoWrapper = styled.div`
    position: relative;
    height: 84vw;
    margin-bottom: 5vw;
    /* background: red; */
`

export const AccessTitle = styled.div`
    font-size: 38px;
    color: white;
    font-weight: 500;
    font-variant: small-caps;
    text-transform: lowercase;
    margin-bottom: 15px;
    @media (max-width: 575px) {
        font-size: 8.2vw;
        text-align: center;
        margin-bottom: 2vw;
        ${props => props.fontSize && `
            font-size: ${props.fontSize};
        `}
    }

`;

export const AccessText = styled.div`
    color: #BDBDBD;
    font-size: 36px;
    line-height: 46px;
    letter-spacing: -0.03rem;
    width: 704px;
    span {
        font-size: inherit;
        color: var(--color-green);
    }
    @media (max-width: 575px) {
        font-size: 4.1vw;
        max-width: 100%;
        text-align: center;
        line-height: 1.25;
        letter-spacing: -0.1vw;
        span {
            font-size: 4.1vw;
        }
        ${props => props.marginBottom && `
            margin-bottom: ${props.marginBottom};
        `}
        ${props => props.fontSize && `
            font-size: ${props.fontSize};
            span {
                font-size: ${props.fontSize};
            }
        `}
        
}   
`;

export const AccessLine = styled.div`
    height: 2px;
    background: #222222;
    @media (max-width: 575px) {
        
    }
`;

export const AccessFooter = styled.div`
    padding: 25px 60px 40px 60px;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    svg {
        fill: var(--color-grey);
        width: 55px;
        margin: 0 12px;
    }
    @media (max-width: 575px) {
        flex-direction: column;
        padding-top: 0;
        svg {
            width: 0;
            margin: 0;
        }
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
        font-size: 24px;
        font-weight: 500;
        cursor: pointer;
    }
    @media (max-width: 575px) {
        width: 100%;
        padding: 4vw 0;
        font-size: 6.5vw;
        border-radius: 1.5vw;
        :hover {
            font-size: 6.5vw;
        }
        ${props => props.marginBottom && `
            margin-bottom: ${props.marginBottom};
        `}
}
`

export const ButtonPrimaryStyle = css`
    ${ButtonStyle}
    color: #063318;
    background: linear-gradient(180deg, #45E786 0%, #14793E 100%);
    &:hover {
        color: #063318;
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

export const AccessButton = styled.button`
    ${ButtonSecondaryStyle}
`;

export const AccessButtonStepTwo = styled.button`
    ${ButtonPrimaryStyle}
`

export const AccessThanksButton = styled(Link)`
    ${ButtonPrimaryStyle}
    padding-left: 50px;
    padding-right: 50px;
    text-align: center;
`

export const YouMoneyWrapper = styled.div`
    display: flex;

    align-items: center;
    svg {
        width: 90px;
        margin: 0 10px;
    }
    @media (max-width: 575px) {
        width: 100%;
        justify-content: center;
        svg {
            width: 15vw;
            /* margin: 0 10px; */
        }
    }

`;

export const YouMoneyText = styled.div`
    font-size: 16px;
    width: 80px;
    color: #BDBDBD;
    @media (max-width: 575px) {
        /* display: none; */
        width: 40vw;
        font-size: 4vw;
    }
`;

export const AccessForm = styled.form`
    display: flex;
`

export const AccessFormField = styled.div`
    margin-right: 16px;
    
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`

export const AccessFormControl = styled.div`
    position: relative;
    
    ${props => props.width && `
        width: ${props.width};
    `}
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
`

export const AccessInputIconStyle = css`
    width: 72px;
    height: 72px;
    
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
    @media (max-width: 575px) {
        margin-bottom: 4vw;
        justify-content: space-between;
        align-items: center;
        svg {
            width: 10vw;
            height: 11vw;
            margin: 0;
            fill: red;
            position: relative;
            left: -3vw;
            top: 3vw;
        }
    }
`;

export const AccessPriceYear = styled.div`
    &:not(:last-child) {
        margin-right: 20px;
    }
    @media (max-width: 575px) {
        margin-right: 0;

}
`;

export const DevicesImage = styled.img`
width: 175px;
`

export const AccessPriceTitle = styled.div`
    color: #BDBDBD;
    font-size: 16px;
    margin-left: 5px;
    
    span {
        position: relative;
        color: #BDBDBD;
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
    @media (max-width: 575px) {
        font-size: 4vw;
        margin-bottom: 1vw;
        span {
            font-size: 4vw;
        }
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
        color: #BDBDBD;
    }

    ${props => props.green && `
        color: var(--color-green);
        span {
            color: var(--color-green);
        }
    `}
    /* font-weight: 300; */
    @media (max-width: 575px) {
    font-size: 12vw;
    line-height: 1;
    span {
        font-size: 6vw;
        margin-left: 1vw;
    }
}
`;

export const LogoWrapper = styled.div`
    /* width: 100%; */
    display: flex;
    justify-content: space-between;
    align-items: center;

    svg {
        position: relative;
        z-index: 9999;
    }
    position: relative;
    @media (max-width: 575px) {

}
`;

export const HeaderWrapper = styled.div`
    width: 1240px;
    padding: 28px 0 56px 0;
    position: relative;
    /* z-index: 9999; */
    @media (max-width: 575px) {
        padding-top: 10vw;
    }
    /* overflow-x: hidden; */
`;

export const CurveWrapper = styled.div`
    overflow: hidden;
`

export const CurveIcon = styled(Curve)`
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 1240px;
    display: block;
    @media (max-width: 575px) {
        display: none;
    }
`

export const CurveMobileIcon = styled(MobileCurve)`
    position: absolute;
    top: 20vw;
    left: 50%;
    transform: translateX(-50%);
    width: 95vw;
    display: none;
    @media (max-width: 575px) {
        display: block;
    }
`

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

export const DesktopWrapper = styled.div`
    display: block;
    @media (max-width: 575px) {
        display: none;
    }
`

export const MobileWrapper = styled.div`
    display: none;
    @media (max-width: 575px) {
        display: block;
        width: 100%;
    }
`


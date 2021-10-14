import styled from "styled-components";

import Curve from "../../assets/svgs/curve.svg";
import MobileCurve from "../../assets/svgs/curve-mobile.svg";

export const AccessWrapper = styled.div`
    background: rgba(256, 256, 256, 0.01);

    padding: 60px 80px;
    border-radius: 20px;
    /* display: flex; */
    /* align-items: flex-end; */
    /* justify-content: space-between; */
    box-shadow: 0px 2.47088px 6.17719px rgba(0, 0, 0, 0.25), inset 0 0 50px rgba(256, 256, 256, 0.08);
    margin-top: 50px;
    overflow: hidden;
    position: relative;

    @media (max-width: 575px) {
        padding: 5vw 4vw 8vw;
        border-radius: 6vw;
        margin-top: 10vw;
        overflow: unset;
        form {
            width: 100%;
            margin: 5vw 0;
        }
    }
`;

export const AccessImageWrapper = styled.div`
    /* position: relative; */
    height: 40vw;
    overflow: hidden;
`

export const AccessInfo = styled.div``;

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
    width: 930px;
    /* height: 200px; */
    position: absolute;
    right: -200px;
    z-index: 1;
    bottom: -150px;

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
    width: 700px;
    /* height: 200px; */
    position: absolute;
    right: -200px;
    z-index: 1;
    bottom: 60%;
    transform: translateY(50%);

    @media (max-width: 575px) {
        bottom: -10vw;
        right: 51%;
        transform: translateX(50%);
        /* top: 0; */
        width: 132vw;
    /* height: 200px; */
        /* position: static;
        left: 0;
        right: auto;
        z-index: 1;
        top: 0;
        bottom: auto; */
    }
`

export const AccessImageStepTwoWrapper = styled.div`
    position: relative;
    height: 84vw;
    margin-bottom: 5vw;
    /* background: red; */
`

export const AccessTitle = styled.div`
    text-transform: uppercase;
    font-size: 32px;
    color: white;
    font-weight: 600;
    @media (max-width: 575px) {
        font-size: 8.2vw;
        text-align: center;
        margin-bottom: 2vw;
    }
`;

export const AccessText = styled.div`
    color: #BDBDBD;
    font-size: 32px;
    line-height: 1.43;
    max-width: 60%;
    span {
        font-size: 32px;
        color: var(--color-green);
    }
    @media (max-width: 575px) {
        font-size: 4vw;
        max-width: 100%;
        text-align: center;
        line-height: 1.25;
        span {
            font-size: 4.1vw;
        }
}   
`;

export const AccessLine = styled.div`
    height: 2px;
    background: rgba(256, 256, 256, 0.1);
    margin: 20px 0;
    @media (max-width: 575px) {
        
    }
`;

export const AccessFooter = styled.div`
    padding-top: 20px;
    display: flex;
    align-items: center;
    svg {
        fill: var(--color-grey);
        width: 55px;
        margin: 0 20px;
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

export const AccessButton = styled.button`
    background: linear-gradient(180deg, #45E786 0%, #14793E 100%);
    padding: 18px 40px;
    color: #151515;
    font-size: 24px;
    text-decoration: none;
    font-weight: 500;
    border-radius: 5px;
    
    :hover {
        color: #151515;
        font-size: 24px;
        font-weight: 500;
        background: #14793E;
        cursor: pointer
    }
    @media (max-width: 575px) {
        width: 100%;
        padding: 4vw 0;
        font-size: 6.5vw;
        border-radius: 1.5vw;
        :hover {
            font-size: 6.5vw;
        }
}
`;

export const YouMoneyWrapper = styled.div`
    display: flex;
    align-items: center;
    svg {
        width: 90px;
        margin: 0 10px;
    }
    @media (max-width: 575px) {
        svg {
            width: 30vw;
            /* margin: 0 10px; */
        }
    }

`;

export const YouMoneyText = styled.div`
    font-size: 16px;
    width: 80px;
    color: #BDBDBD;
    @media (max-width: 575px) {
        display: none;
    }
`;

export const AccessPriceWrapper = styled.div`
    display: flex;
    /* margin-left: 20px; */
    @media (max-width: 575px) {

}
`;

export const AccessPriceYear = styled.div`
    margin-right: 20px;
    @media (max-width: 575px) {
        margin-right: 4vw;
}
`;

export const AccessPriceTitle = styled.div`
    color: #BDBDBD;
    font-size: 16px;
    
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
        font-size: 5vw;
    }
`;

export const AccessPrice = styled.div`
    color: white;
    font-size: 52px;
    letter-spacing: -0.1rem;
    line-height: 1;
    span {
        font-size: 28px;
        margin-left: 3px;
        color: white;
    }

    ${props => props.green && `
        color: var(--color-green);
        span {
            color: var(--color-green);
        }
    `}
    /* font-weight: 300; */
    @media (max-width: 575px) {
    font-size: 10vw;
    line-height: 1;
    span {
        font-size: 5vw;
        margin-left: 1vw;
    }
}
`;

export const LogoWithCurve = styled.div`
    /* width: 100%; */
    /* svg {
        box-shadow: 0 0 5px black;
    } */
    display: flex;
    justify-content: center;

    svg {
        position: relative;
        z-index: 1;
    }
    position: relative;
    @media (max-width: 575px) {

}
`;

export const LogoWrapper = styled.div`
    padding-top: 50px;
    position: relative;
    overflow: hidden;
    @media (max-width: 575px) {
        padding-top: 10vw;
    }
    /* width: 100%; */
    /* overflow-x: hidden; */
`;  

export const CurveIcon = styled(Curve)`
    position: absolute;
    top: 8px;
    left: 50%;
    transform: translateX(-50%);
    width: 1150px;
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
    }
`


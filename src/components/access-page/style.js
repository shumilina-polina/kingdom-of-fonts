import styled from "styled-components";

import Curve from "../../assets/svgs/curve.svg";

export const AccessWrapper = styled.div`
    background: #242424;
    padding: 60px 80px;
    border-radius: 5px;
    /* display: flex; */
    /* align-items: flex-end; */
    /* justify-content: space-between; */
    box-shadow: 0px 2.47088px 6.17719px rgba(0, 0, 0, 0.25);
    margin-top: 50px;
    overflow: hidden;
    position: relative;
`;

export const AccessInfo = styled.div``;

export const AccessImage = styled.img`
    width: 1150px;
    /* height: 200px; */
    position: absolute;
    right: -400px;
    z-index: 1;
    bottom: -230px;
`;

export const AccessTitle = styled.div`
    text-transform: uppercase;
    font-size: 32px;
    color: white;
    font-weight: 600;
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
`;

export const AccessLine = styled.div`
    height: 2px;
    background: rgba(256, 256, 256, 0.1);
    margin: 20px 0;
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
`;

export const YouMoneyWrapper = styled.div`
    display: flex;
    align-items: center;
    svg {
        width: 90px;
        margin: 0 10px;
    }
`;

export const YouMoneyText = styled.div`
    font-size: 16px;
    width: 100px;
    color: #BDBDBD;
`;

export const AccessPriceWrapper = styled.div`
    display: flex;
    /* margin-left: 20px; */
`;

export const AccessPriceYear = styled.div`
    margin-right: 20px;
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
`;

export const LogoWithCurve = styled.div`
    /* width: 100%; */
    /* svg {
        box-shadow: 0 0 5px black;
    } */
    svg {
        position: relative;
        z-index: 1;
    }
    position: relative;
`;

export const CurveIcon = styled(Curve)`
    position: absolute;
    top: -25px;
    left: 50%;
    transform: translateX(-50%);
    width: 1500px;
`

export const ShadowCircle = styled.div`
    background: rgb(21, 21, 21);
    width: 80%;
    height: 80%;
    border-radius: 50%;
    box-shadow: 0 0 5px rgb(21, 21, 21);
    position: absolute;
    top: 50%;
    left: 48%;
    transform: translate(-50%, -50%);
    /* left: -1px; */
    /* z-index: -1; */
`


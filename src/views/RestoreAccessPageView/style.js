import styled from 'styled-components';
import { Link } from 'gatsby'

export const RestoreWrapper = styled.div`
    background: #242424;
    padding: 54px;
    border-radius: 5px;
    display: flex;
    width: 916px;
    align-items: flex-end;
    justify-content: space-between;
    box-shadow: 0px 2.47088px 6.17719px rgba(0, 0, 0, 0.25);
    margin-top: 50px;
    
    svg {
        width: 27px;
        height: 27px;
        min-width: 27px;
        min-height: 27px;
        margin-left: 10px;
        position: relative;
        top: 3px;
    }
`

export const RestoreText = styled.div`
    color: white;
    font-size: 32px;
    font-weight: 500;
    /* margin-right: 30px; */
    line-height: 1.43;
    max-width: 75%;
`

export const RestoreButton = styled(Link)`
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
    }

`


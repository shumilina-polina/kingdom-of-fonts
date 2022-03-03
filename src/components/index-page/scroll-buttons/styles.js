import styled from "styled-components"

import ArrowUp from "../../../assets/svgs/arrow-up.svg"

export const ScrollButtonsContainer = styled.div`
  position: fixed;
  
  bottom: 39px;
  right: calc(50% - 1240px / 2 - 36px - 42px);
  
  display: flex;
  flex-direction: column;
`

const ScrollButtonBase = styled(ArrowUp)`
  width: 36px;
  height: 36px;

  ${props => props.disabled && `
    filter: brightness(30%);
  `}

  ${props => !props.disabled && `
    cursor: pointer;

    &:hover {
      filter: brightness(70%);
    }
  `}

  &:not(:last-child) {
    margin-bottom: 8px;
  }
`

export const ScrollButtonTop = styled(ScrollButtonBase)`
  
`

export const ScrollButtonBottom = styled(ScrollButtonBase)`
  transform: rotateX(180deg);
`

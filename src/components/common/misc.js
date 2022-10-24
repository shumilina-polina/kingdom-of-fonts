import { css } from "styled-components"

export const Glass = css`
  box-shadow: inset 0 1.5em 1.5em rgba(255, 255, 255, 0.03), 
              inset 0 6.25em 6.25em rgba(255, 255, 255, 0.03),
              inset 0 -2.5em 9.375em rgba(255, 255, 255, 0.03), 
              inset 0 -1.5em 5em rgba(255, 255, 255, 0.03);
`

export const HideScrollbars = css`
  overflow: auto;

  overflow: -moz-scrollbars-none;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none !important;
    height: 0 !important;
    width: 0 !important;
    background: transparent !important;
    -webkit-appearance: none !important;
  }
`

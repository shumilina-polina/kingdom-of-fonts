import styled, { css } from "styled-components"

const TextBaseStyle = css`
  background-clip: text;
  -webkit-background-clip: text;
  background-image: var(--accent);
`

export const TextHighlightStyle = css`
  ${TextBaseStyle}
  color: transparent;
`

export const TextBase = styled.div`
  ${TextBaseStyle}
`

export const TextHighlight = styled.span`
  color: transparent;
`

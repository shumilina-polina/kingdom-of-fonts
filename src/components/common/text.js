import { css } from "styled-components"

// XL

export const TextTagXL = css`
  font-weight: 800;
  font-size: 1.5em;
  line-height: 1em;
  letter-spacing: 0.04em;
  text-transform: uppercase;
`

export const TextTitleXL = css`
  font-weight: 700;
  font-size: 5em;
  line-height: 1em;
  letter-spacing: -0.04em;
`

export const TextHeaderXL = css`
  font-weight: 800;
  font-size: 2.25em;
  line-height: 1em;
  letter-spacing: -0.02em;
`

export const TextXL = css`
  font-weight: 500;
  font-size: 2em;
  line-height: 1.25em;
`

export const TextItemXL = css`
  font-weight: 600;
  font-size: 2em;
  line-height: 1em;
`

// L

export const TextTagL = css`
  font-weight: 500;
  font-size: 1.25em;
  line-height: 1em;
  letter-spacing: 0.05em;
  text-transform: uppercase;
`

export const TextTitleL = css`
  font-weight: 700;
  font-size: 3.5em;
  line-height: 1em;
  letter-spacing: -0.03em;
`

export const TextHeaderL = css`
  font-weight: 800;
  font-size: 1.875em;
  line-height: 1em;
  letter-spacing: -0.01em;
`

export const TextL = css`
  font-weight: 500;
  font-size: 1.5em;
  line-height: 1.333em;
  letter-spacing: 0.01em;
`

export const TextItemL = css`
  font-weight: 600;
  font-size: 1.5em;
  line-height: 1em;
  letter-spacing: 0.01em;
`

// M

export const TextTagM = css`
  font-weight: 800;
  font-size: 1em;
  line-height: 1em;
  letter-spacing: 0.06em;
  text-transform: uppercase;
`

export const TextTitleM = css`
  font-weight: 700;
  font-size: 2.5em;
  line-height: 1em;
  letter-spacing: -0.02em;
`

export const TextHeaderM = css`
  font-weight: 700;
  font-size: 1.5em;
  line-height: 1em;
`

export const TextM = css`
  font-weight: 500;
  font-size: 1.25em;
  line-height: 1.2em;
  letter-spacing: 0.02em;
`

export const TextItemM = css`
  font-weight: 600;
  font-size: 1.125em;
  line-height: 1.222em;
  letter-spacing: 0.02em;
`

// S

export const TextTagS = css`
  font-weight: 800;
  font-size: 0.75em;
  line-height: 1em;
  letter-spacing: 0.07em;
  text-transform: uppercase;
`

export const TextTitleS = css`
  font-weight: 700;
  font-size: 2em;
  line-height: 1em;
  letter-spacing: -0.01em;
`

export const TextHeaderS = css`
  font-weight: 600;
  font-size: 1.125em;
  line-height: 1.11em;
  letter-spacing: 0.01em;
`

export const TextS = css`
  font-weight: 500;
  font-size: 1em;
  line-height: 1.5em;
  letter-spacing: 0.03em;
`

export const TextItemS = css`
  font-weight: 600;
  font-size: 1em;
  line-height: 1.25em;
  letter-spacing: 0.03em;
`

export const TextCaptionS = css`
  font-weight: 500;
  font-size: 0.75em;
  line-height: 1.333em;
  letter-spacing: 0.03em;
`

// mapping

export const mapping = {
  tag: {
    XL: TextTagXL,
    L: TextTagL,
    M: TextTagM,
    S: TextTagS,
  },
  title: {
    XL: TextTitleXL,
    L: TextTitleL,
    M: TextTitleM,
    S: TextTitleS,
  },
  header: {
    XL: TextHeaderXL,
    L: TextHeaderL,
    M: TextHeaderM,
    S: TextHeaderS,
  },
  text: {
    XL: TextXL,
    L: TextL,
    M: TextM,
    S: TextS,
  },
  item: {
    XL: TextItemXL,
    L: TextItemL,
    M: TextItemM,
    S: TextItemS,
  },
  caption: {
    S: TextCaptionS,
  }
}

export default mapping

import React, { useRef } from "react"
import styled from "styled-components"

import useCSSVariable from "../../hooks/useCSSVariable"

const Atlas = ({
  idleFrames,
  hoverFrames = null,
  clickFrames = null,
  idleFrame = 0,
  hoverFrame = 0,
  clickFrame = 0
}) => {
  const idleRow = 0
  const hoverRow = !!hoverFrames ? 1 : idleRow
  const clickRow = !!clickFrames ? 2 : hoverRow

  const ref = useRef()

  useCSSVariable(ref, "--idle-row", idleRow)
  useCSSVariable(ref, "--hover-row", hoverRow)
  useCSSVariable(ref, "--click-row", clickRow)

  useCSSVariable(ref, "--idle-column", idleFrame)
  useCSSVariable(ref, "--hover-column", hoverFrame)
  useCSSVariable(ref, "--click-column", clickFrame)

  return (
    <Window ref={ref}>
      <Content>
        {idleFrames.map((frame, i) => (
          <FrameWrapper key={`idle-${i}`} row={idleRow} column={i}>{frame}</FrameWrapper>
        ))}
        {hoverFrames && hoverFrames.map((frame, i) => (
          <FrameWrapper key={`hover-${i}`} row={hoverRow} column={i}>{frame}</FrameWrapper>
        ))}
        {clickFrames && clickFrames.map((frame, i) => (
          <FrameWrapper key={`click-${i}`} row={clickRow} column={i}>{frame}</FrameWrapper>
        ))}
      </Content>
    </Window>
  )
}

export const SingleFrameAtlas = ({ idle, hover, click }) => {
  return (
    <Atlas
      idleFrames={[idle]}
      hoverFrames={hover && [hover]}
      clickFrames={click && [click]}
    />
  )
}

export const HoverArea = styled.div``

const Window = styled.div`
  width: 100%;
  height: 100%;
  
  overflow: hidden;
  
  --active-row: var(--idle-row);
  --active-column: var(--idle-column);

  &:hover, a:hover &, ${HoverArea}:hover & {
    --active-row: var(--hover-row);
    --active-column: var(--hover-column);
  }

  &:active, a:active &, ${HoverArea}:active & {
    --active-row: var(--click-row);
    --active-column: var(--click-column);
  }
`

const Content = styled.div`
  position: relative;
  
  width: 100%;
  height: 100%;

  transform: translate(
    calc(100% * var(--active-column) * -1), 
    calc(100% * var(--active-row) * -1)
  );
`

const FrameWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  transform: translate(
    calc(100% * ${props => props.column}), 
    calc(100% * ${props => props.row})
  );
`

export default Atlas

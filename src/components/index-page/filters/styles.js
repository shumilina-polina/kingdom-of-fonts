import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;

  flex-direction: column;
  align-items: center;
  /* margin-bottom: 48px; */
`;

export const StickyWrapper = styled.div`
  position: sticky;
  top: 0;
  z-index: 3;
  background: var(--color-background);
  padding: 20px 0;
  width: 100%;
  @media (max-width: 575px) {
    padding: 5vw 0 4vw;
    /* margin-bottom: 2vw; */
  }
`

import styled from "styled-components";

export const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 5px;
  :hover {
    cursor: pointer;
  }

  @media (max-width: 575px) {
    margin-bottom: 0;
    svg {
      width: 50vw;
      height: 28vw;
      z-index: 3;
    }
  }
`;


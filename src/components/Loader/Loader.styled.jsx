import styled from "@emotion/styled";

export const SpinnerContainer = styled.div`
  width: 48px;
  height: 48px;
  margin: 0 auto;
  animation: rotate-center 0.6s infinite linear;

  @keyframes rotate-center {
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

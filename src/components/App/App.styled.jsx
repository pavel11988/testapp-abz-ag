import styled from "@emotion/styled";

export const AppContainer = styled.div`
  background-color: var(--background-color);
  font-family: var(--font-body);
  font-weight: var(--weight-body);
  font-size: var(--size-body);
  line-height: var(--lineheight-body);
  padding-bottom: 100px;
`;

export const ShowmoreContainer = styled.div`
  margin: 30px auto 0;

  @media (min-width: 768px) {
    margin-top: 50px;
  }

  height: 48px;
`;

export const ButtonLoadMore = styled.button`
  display: block;
  margin: 0 auto;

  cursor: pointer;

  text-align: center;
  border-radius: 80px;
  border: none;
  width: 120px;
  height: 34px;
  text-decoration: none;

  color: var(--black-text-color);
  background-color: var(--primary-color);

  &:hover {
    color: var(--black-text-color);
    background-color: var(--button-hover-color);
  }

  &:visited {
    color: var(--black-text-color);
  }
`;

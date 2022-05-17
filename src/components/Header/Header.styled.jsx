import styled from "@emotion/styled";

export const WideContainer = styled.header`
  background-color: var(--white-background-color);
`;

export const Container = styled.div`
  min-width: 350px;
  height: 60px;
  display: flex;

  justify-content: space-between;
  align-items: center;

  padding-left: 16px;
  padding-right: 16px;

  @media (min-width: 768px) {
    padding-left: 32px;
    padding-right: 32px;
  }

  @media (min-width: 1024px) {
    padding-left: 60px;
    padding-right: 60px;
  }

  @media (min-width: 1170px) {
    width: 1170px;
    margin: 0 auto;
    padding: 0;
  }
`;
export const Logo = styled.img`
  margin-right: 2px;
`;

export const NavContainer = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
`;

export const ButtonAnchor = styled.button`
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  color: rgba(0, 0, 0, 0.87);

  border-radius: 80px;
  border: none;

  width: 100px;
  height: 34px;

  text-decoration: none;

  color: var(--black-text-color);
  background-color: var(--primary-color);

  &:first-of-type {
    margin-right: 10px;
  }

  &:hover {
    color: var(--black-text-color);
    background-color: var(--button-hover-color);
  }
`;

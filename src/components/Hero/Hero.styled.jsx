import styled from "@emotion/styled";
import backgroundImageMobile from "../../images/hero-mobile.webp";
import backgroundImageTablet from "../../images/hero-tablet.webp";
import backgroundImageDesktop from "../../images/hero-desktop.webp";
import backgroundImageWide from "../../images/hero-wide.webp";

export const Container = styled.section`
  text-align: center;

  padding-top: 40px;
  padding-bottom: 71px;
  padding-left: 16px;
  padding-right: 16px;
  margin: 0 auto;
  color: var(--white-text-color);

  background-size: cover;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${backgroundImageMobile});

  @media (min-width: 768px) {
    padding-top: 89px;
    padding-bottom: 88px;
    padding-left: 194px;
    padding-right: 194px;

    height: 500px;

    background-size: cover;
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
      url(${backgroundImageTablet});
  }

  @media (min-width: 1024px) {
    padding-top: 164px;
    padding-bottom: 163px;
    padding-left: 322px;
    padding-right: 322px;

    height: 650px;
    max-width: 1170px;

    background-size: cover;
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
      url(${backgroundImageDesktop});
  }

  @media (min-width: 1170px) {
    padding-top: 164px;
    padding-bottom: 163px;
    padding-left: 395px;
    padding-right: 395px;

    height: 650px;

    background-size: cover;
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
      url(${backgroundImageWide});
  }
`;

export const Title = styled.h1`
  font-family: var(--font-title);
  font-weight: var(--weight-title);
  font-size: var(--size-title);
  line-height: var(--lineheight-title);

  @media (max-width: 767px) {
    padding-left: 16px;
    padding-right: 16px;
  }

  text-align: center;

  margin-bottom: 21px;
`;
export const Text = styled.p`
  margin-bottom: 32px;
`;
export const ButtonAnchor = styled.button`
  display: inline-block;
  cursor: pointer;
  border-radius: 80px;
  border: none;

  width: 100px;
  height: 34px;

  text-decoration: none;

  display: inline-flex;
  align-items: center;
  justify-content: center;

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

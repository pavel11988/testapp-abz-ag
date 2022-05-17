import styled from "@emotion/styled";

import bgHeroMob1x from "../../images/bgHero/heroBackgroundMob1x.webp";
import bgHeroMob2x from "../../images/bgHero/heroBackgroundMob2x.webp";
import bgHeroTab1x from "../../images/bgHero/heroBackgroundTab1x.webp";
import bgHeroTab2x from "../../images/bgHero/heroBackgroundTab2x.webp";
import bgHeroDes1x from "../../images/bgHero/heroBackgroundDes1x.webp";
import bgHeroDes2x from "../../images/bgHero/heroBackgroundDes2x.webp";
import bgHeroWid1x from "../../images/bgHero/heroBackgroundWid1x.webp";
import bgHeroWid2x from "../../images/bgHero/heroBackgroundWid2x.webp";

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
    url(${bgHeroMob1x});

  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
      url(${bgHeroMob2x});
  }

  @media (min-width: 768px) {
    padding-top: 89px;
    padding-bottom: 88px;
    padding-left: 194px;
    padding-right: 194px;
    height: 500px;

    background-size: cover;
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
      url(${bgHeroTab1x});
  }

  @media screen and (min-width: 768px) and (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
      url(${bgHeroTab2x});
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
      url(${bgHeroDes1x});
  }

  @media screen and (min-width: 1024px) and (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
      url(${bgHeroDes2x});
  }

  @media (min-width: 1170px) {
    padding-top: 164px;
    padding-bottom: 163px;
    padding-left: 395px;
    padding-right: 395px;

    height: 650px;

    background-size: cover;
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
      url(${bgHeroWid1x});
  }

  @media (min-width: 1170px) and (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-size: cover;
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
      url(${bgHeroWid2x});
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

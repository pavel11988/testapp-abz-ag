import styled from "@emotion/styled";

export const Item = styled.li`
  width: 328px;
  height: 254px;

  border-radius: 15px;
  background-color: var(--white-background-color);

  text-align: center;

  padding: 20px;

  margin: 0 auto;
  margin-bottom: 20px;

  text-align: center;

  @media (min-width: 768px) and (max-width: 1023px) {
    width: 344px;
    margin: 0;
    &:not(:nth-of-type(2n)) {
      margin-right: 16px;
    }
    &:not(:nth-last-of-type(-n + 2)) {
      margin-bottom: 16px;
    }
  }

  @media (min-width: 1024px) {
    width: 282px;

    margin: 0;
    &:not(:nth-of-type(3n)) {
      margin-right: 29px;
    }

    &:not(:nth-last-of-type(-n + 3)) {
      margin-bottom: 29px;
    }
  }

  @media (min-width: 1170px) {
    width: 370px;
  }
`;
export const Avatar = styled.img`
  display: inline-block;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  margin-bottom: 15px;
`;

export const Tooltip = styled.span`
  display: none;
  max-width: 250px;
  max-height: max-content;
  word-wrap: break-word;
`;

export const NameContainer = styled.div`
  & > p {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    width: 100%;
  }
  padding-bottom: 20px;
  position: relative;
  cursor: pointer;

  &:hover span {
    overflow: visible;
    padding-left: 16px;
    padding-right: 16px;
    background-color: red;
    display: block;
    z-index: 1;

    position: absolute;
    text-decoration: none;

    color: var(--white-text-color);
    background: rgba(0, 0, 0, 0.87);
    border-radius: 4px;

    top: 25px;
    right: 20%;
    left: 20%;
  }
`;

export const Position = styled.p``;

export const EmailContainer = styled.div`
  & > p {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    width: 100%;
  }

  position: relative;
  cursor: pointer;

  &:hover span {
    overflow: visible;
    padding-left: 16px;
    padding-right: 16px;
    background-color: red;
    display: block;
    z-index: 1;

    position: absolute;
    text-decoration: none;

    color: var(--white-text-color);
    background: rgba(0, 0, 0, 0.87);
    border-radius: 4px;

    top: 25px;
    right: 20%;
    left: 20%;
  }
`;
export const Phone = styled.p``;

import styled from "@emotion/styled";

export const TitleUsersList = styled.h2`
  margin: 140px auto 50px;
  width: 70%;
  text-align: center;
  font-family: var(--font-title);
  font-weight: var(--weight-title);
  font-size: var(--size-title);
  line-height: var(--lineheight-title);
`;

export const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;

  @media (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }

  @media (min-width: 1170px) {
    width: 1170px;
    margin-left: auto;
    margin-right: auto;
  }
`;
export const NotFoundTitle = styled.h2`
  font-family: var(--font-title);
  font-weight: var(--weight-title);
  font-size: var(--size-title);
  line-height: var(--lineheight-title);

  text-align: center;
`;

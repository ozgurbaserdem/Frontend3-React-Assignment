import styled from "styled-components";

const HeadingOneStyled = styled.h1`
  color: #111;
  font-family: "Helvetica Neue", sans-serif;
  font-size: 40px;
  font-weight: bold;
  letter-spacing: -1px;
  line-height: 1;
  text-align: center;
`;

const HeadingTwoStyled = styled(HeadingOneStyled)`
  font-family: "Open Sans", sans-serif;
  font-size: 30px;
  font-weight: 300;
  line-height: 32px;
  margin: 0 0 72px;
`;

export { HeadingOneStyled, HeadingTwoStyled };

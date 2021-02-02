import styled from "styled-components";

export const BackgroundGrad = styled.div`
  margin: 0;
  padding: 0;
  background: hsla(139, 70%, 75%, 1);

  background: linear-gradient(
    0deg,
    hsla(139, 70%, 75%, 1) 0%,
    hsla(63, 90%, 76%, 1) 100%
  );

  background: -moz-linear-gradient(
    0deg,
    hsla(139, 70%, 75%, 1) 0%,
    hsla(63, 90%, 76%, 1) 100%
  );

  background: -webkit-linear-gradient(
    0deg,
    hsla(139, 70%, 75%, 1) 0%,
    hsla(63, 90%, 76%, 1) 100%
  );

  filter: progid: DXImageTransform.Microsoft.gradient( startColorstr="#95ECB0", endColorstr="#F3F98A", GradientType=1 );
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
`;

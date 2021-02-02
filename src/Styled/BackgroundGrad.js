import styled from "styled-components";

export const BackgroundGrad = styled.div`
  margin: 0;
  padding: 0;

  background: ${(props) =>
    `rgb(${props.colorOne[0]} ,${props.colorOne[1]} ,${props.colorOne[2]} )`};

  background: linear-gradient(
    0deg,
    ${(props) =>
        `rgb(${props.colorOne[0]} ,${props.colorOne[1]} ,${props.colorOne[2]} )`}
      0%,
    ${(props) =>
        `rgb(${props.colorTwo[0]} ,${props.colorTwo[1]} ,${props.colorTwo[2]} )`}
      100%
  );

  background: -moz-linear-gradient(
    0deg,
    ${(props) =>
        `rgb(${props.colorOne[0]} ,${props.colorOne[1]} ,${props.colorOne[2]} )`}
      0%,
    ${(props) =>
        `rgb(${props.colorTwo[0]} ,${props.colorTwo[1]} ,${props.colorTwo[2]} )`}
      100%
  );

  background: -webkit-linear-gradient(
    0deg,
    ${(props) =>
        `rgb(${props.colorOne[0]} ,${props.colorOne[1]} ,${props.colorOne[2]} )`}
      0%,
    ${(props) =>
        `rgb(${props.colorTwo[0]} ,${props.colorTwo[1]} ,${props.colorTwo[2]} )`}
      100%
  );

  filter: progid: DXImageTransform.Microsoft.gradient( startColorstr="#95ECB0", endColorstr="#F3F98A", GradientType=1 );
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
`;

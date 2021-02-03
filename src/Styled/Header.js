import styled from "styled-components";

export const Header = styled.h1`
  transform: rotate(-90deg);
  flex: 0.1;
  margin: 0;
  padding: 0;
  text-align: center;
  font-size: 36px;
  // margin-right: auto;
  @media (max-width: 1025px) {
    transform: rotate(0deg);
    padding: 5px;
  }
  @media (max-width: 600px) {
    font-size: 26px;
  }
`;

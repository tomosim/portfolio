import styled from "styled-components";

export const Horizontal = styled.span`
  display: flex;
  justify-content: space-around;
  @media (max-width: 400px) {
    flex-direction: column;
  }
`;

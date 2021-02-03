import styled from "styled-components";

export const Panels = styled.li`
  padding: 0 0.5vw;
  width: 99vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
  @media (max-width: 1025px) {
    flex-direction: column;
  }
`;

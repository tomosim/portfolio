import styled from "styled-components";

export const Panel = styled.div`
  margin: 20px 0.5vw;
  padding: 10px;
  border-radius: 8px;
  flex: 0.5;
  transition: 0.4s;
  overflow: hidden;
  background-color: ${(props) =>
    props.nightMode ? "rgb(36, 36, 36)" : "rgb(240, 240, 240)"};
  color: ${(props) =>
    props.nightMode ? "rgb(240, 240, 240)" : "rgb(36, 36, 36)"};
  display: grid;
  grid-template-columns: ${(props) => (props.active ? "80px auto" : "100%")};
  cursor: pointer;
  &.active {
    flex: 5;
    cursor: default;
  }
  @media (max-width: 1025px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 5px 0.5vw;
    &.active {
      flex: 10;
    }
  }
`;

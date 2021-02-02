import styled from "styled-components";

export const Panel = styled.div`
  margin: 20px 0.5vw;
  padding: 15px;
  border-radius: 8px;
  flex: 0.5;
  transition: 0.4s;
  overflow: hidden;
  background-color: ${(props) =>
    props.nightMode ? "rgb(36, 36, 36)" : "rgb(240, 240, 240)"};
  color: ${(props) =>
    props.nightMode ? "rgb(240, 240, 240)" : "rgb(36, 36, 36)"};
  display: flex;
  justify-content: ${(props) => (props.active ? "space-between" : "center")};
  align-items: center;
  &.active {
    flex: 5;
  }
`;

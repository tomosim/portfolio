import styled from "styled-components";

export const FormButton = styled.button`
  font-size: 20px;
  border: 2px solid
    ${(props) => (props.nightMode ? "rgb(240, 240, 240)" : "rgb(36, 36, 36)")};
  background-color: transparent;
  color: ${(props) =>
    props.nightMode ? "rgb(240, 240, 240)" : "rgb(36, 36, 36)"};
  margin: 5px;
  padding: 10px 15px;
  transition: 0.1s;
  &:hover {
    background-color: ${(props) =>
      props.nightMode ? "rgb(240, 240, 240)" : "rgb(36, 36, 36)"};
    color: ${(props) =>
      props.nightMode ? "rgb(36, 36, 36)" : "rgb(240, 240, 240)"};
    cursor: pointer;
  }
`;

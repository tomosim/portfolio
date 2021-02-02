import styled from "styled-components";

export const FormInput = styled.input`
  border: none;
  border-bottom: ${(props) =>
      props.nightMode ? "rgb(240, 240, 240)" : "rgb(36, 36, 36)"}
    solid 2px;
  background-color: transparent;
  font-size: 20px;
  color: ${(props) =>
    props.nightMode ? "rgb(240, 240, 240)" : "rgb(36, 36, 36)"};
  padding: 4px;
  margin: 10px;
  width: 60%;
`;

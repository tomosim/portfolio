import styled from "styled-components";

const Slider = styled.input`
  -webkit-appearance: none; /* Override default CSS styles */
  appearance: none;
  height: 5px; /* Specified height */
  border-radius: 3px;
  margin: 16px 8px;
  background: ${(props) => (props.nightMode ? "white" : "black")};
  outline: none; /* Remove outline */
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 15px;
    height: 15px;
    background: ${(props) => props.colour};
    border: 2px solid ${(props) => props.borderColour};
    border-radius: 8px;
  }
`;

export default Slider;

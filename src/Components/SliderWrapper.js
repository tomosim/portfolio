import React, { useState, useEffect } from "react";
import Slider from "../Styled/Slider";
import { StyledSliderWrapper } from "../Styled/StyledSliderWrapper";

const SliderWrapper = ({ text, setColour, colour, nightMode }) => {
  const [redValue, setRedValue] = useState(colour[0]);
  const [greenValue, setGreenValue] = useState(colour[1]);
  const [blueValue, setBlueValue] = useState(colour[2]);

  useEffect(() => {
    setColour([redValue, greenValue, blueValue]);
  }, [redValue, greenValue, blueValue, setColour]);

  return (
    <StyledSliderWrapper>
      <Slider
        colour={`rgb(${redValue}, ${(10 / 255) * redValue}, ${
          (10 / 255) * redValue
        })`}
        borderColour="rgb(255, 100, 100)"
        type="range"
        min="1"
        max="255"
        id="red"
        value={redValue}
        nightMode={nightMode}
        onChange={(e) => {
          setRedValue(e.target.value);
        }}
      />
      <Slider
        colour={`rgb( ${(10 / 255) * greenValue}, ${greenValue}, ${
          (10 / 255) * greenValue
        })`}
        borderColour="rgb(100, 255, 100)"
        type="range"
        min="1"
        max="255"
        id="green"
        nightMode={nightMode}
        value={greenValue}
        onChange={(e) => {
          setGreenValue(e.target.value);
        }}
      />
      <Slider
        colour={`rgb( ${(10 / 255) * blueValue}, ${
          (10 / 255) * blueValue
        }, ${blueValue})`}
        borderColour="rgb(100, 100, 255)"
        type="range"
        min="1"
        max="255"
        id="blue"
        nightMode={nightMode}
        value={blueValue}
        onChange={(e) => {
          setBlueValue(e.target.value);
        }}
      />
    </StyledSliderWrapper>
  );
};

export default SliderWrapper;

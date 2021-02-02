import React from "react";
import SliderWrapper from "./SliderWrapper";

const Settings = ({ setColorOne, colorOne, setColorTwo, colorTwo }) => {
  return (
    <>
      <SliderWrapper
        text="Colour One"
        setColour={setColorOne}
        colour={colorOne}
      ></SliderWrapper>
      <SliderWrapper
        text="Colour Two"
        setColour={setColorTwo}
        colour={colorTwo}
      ></SliderWrapper>
    </>
  );
};

export default Settings;

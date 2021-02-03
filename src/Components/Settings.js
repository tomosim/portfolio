import React from "react";
import SliderWrapper from "./SliderWrapper";
import Toggle from "react-styled-toggle";

const Settings = ({
  setColorOne,
  colorOne,
  setColorTwo,
  colorTwo,
  nightMode,
  setNightMode,
}) => {
  return (
    <>
      <Toggle
        checked={nightMode ? false : true}
        labelLeft="Night Mode"
        labelRight="Day Mode"
        height="28"
        width="50"
        sliderHeight="22"
        sliderWidth="22"
        translate="20"
        backgroundColorChecked="#303030"
        onChange={() => {
          setNightMode(!nightMode);
        }}
      />
      <h3>Colour One</h3>
      <SliderWrapper
        setColour={setColorOne}
        colour={colorOne}
        nightMode={nightMode}
      ></SliderWrapper>
      <h3>Colour Two</h3>
      <SliderWrapper
        setColour={setColorTwo}
        colour={colorTwo}
        nightMode={nightMode}
      ></SliderWrapper>
    </>
  );
};

export default Settings;

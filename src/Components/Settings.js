import React from "react";
import SliderWrapper from "./SliderWrapper";

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
      <SliderWrapper
        text="Colour One"
        setColour={setColorOne}
        colour={colorOne}
        nightMode={nightMode}
      ></SliderWrapper>
      <SliderWrapper
        text="Colour Two"
        setColour={setColorTwo}
        colour={colorTwo}
        nightMode={nightMode}
      ></SliderWrapper>
      <h3>Night Mode</h3>
      <button onClick={() => setNightMode(!nightMode)}>
        {nightMode ? "Off" : "On"}
      </button>
    </>
  );
};

export default Settings;

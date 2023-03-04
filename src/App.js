/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Instructions from "./Instructions";
import Lightbulb from "./Lightbulb";
import "./index.css";
import { useState } from "react";

const App = () => {
  const [lightIsOn, setLightIsOn] = useState(false);
  const [numberOfClicks, setNumberOfClicks] = useState(0);

  const SwitchLightOn = () => {
    setNumberOfClicks(numberOfClicks + 1);
    if (lightIsOn) {
      setLightIsOn(false);
    } else {
      setLightIsOn(true);
      setTimeout(() => {
        setLightIsOn(false);
      }, 5000);
    }
  };

  return (
    <>
      <Instructions />
      <div className={lightIsOn ? "block night" : "block"}>
        <a onClick={() => SwitchLightOn()}> turn me on! </a>
        <div className="container">
          {numberOfClicks > 10 ? (
            <p className="candle">
              Since you played around, you'll use a candle from now on!
            </p>
          ) : (
            <Lightbulb />
          )}
        </div>
      </div>
    </>
  );
};

export default App;

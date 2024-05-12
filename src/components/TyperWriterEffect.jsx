import React from "react";
import Typewriter from "typewriter-effect";

const TypewriterEffect = () => {
  return (
    <Typewriter
      onInit={(typewriter) => {
        typewriter.pauseFor(100);
      }}
      options={{
        strings: ["Realities", "Future", "Living"],
        autoStart: true,
        loop: true,
        devMode: false,
      }}
    />
  );
};

export default TypewriterEffect;

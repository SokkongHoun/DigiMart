import React from "react";
import Typewriter from "typewriter-effect";

const TypewriterEffect = () => {
  return (
    <Typewriter
      onInit={(typewriter) => {
        typewriter
          .pauseFor(100)
          .deleteAll()
          .callFunction(() => {
            console.log("All strings were deleted");
          })
          .start();
      }}
      options={{
        strings: ["Realities", "Future", "Living"],
        autoStart: true,
        loop: true,
      }}
    />
  );
};

export default TypewriterEffect;

import React from "react";
import useCustomHook from "./UseCustomHook";

const FirstComponent = () => {
  const { resetCounter, counter } = useCustomHook(0, "FirstComponent");

  return (
    <div>
      <h1>This is the First Component</h1>
      <h2>{counter}</h2>
      <button onClick={resetCounter}>Click here!</button>
    </div>
  );
};

export default FirstComponent;

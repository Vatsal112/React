import React from "react";
import useCustomHook from "./UseCustomHook";

const SecondComponent = () => {
  const { counter, resetCounter } = useCustomHook(0, "SecondComponent");

  return (
    <div>
      <h1> This is the Second Component</h1>
      <h2>{counter}</h2>
      <button onClick={resetCounter}>Click here!</button>
    </div>
  );
};

export default SecondComponent;

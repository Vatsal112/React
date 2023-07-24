import { useState, useEffect } from "react";

function useCustomHook(initializer, componentName) {
  const [counter, setCounter] = useState(initializer);

  function resetCounter() {
    setCounter(counter + 1);
  }

  useEffect(() => {
    console.log(
      "The button of the " +
        componentName +
        " is clicked " +
        counter +
        " times."
    );
  }, [counter, componentName]);

  return { resetCounter, counter };
}

export default useCustomHook;

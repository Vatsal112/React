import React, { useCallback, useState } from "react";

const Instructions = React.memo((props) => {
  console.log(`Instruction`);
  return (
    <div style={{ background: "black", color: "yellow", padding: "1rem" }}>
      <p>Follow the instructions above as closely as possible</p>
    </div>
  );
});

const Age = ({ age, handleClick }) => {
  return (
    <div>
      <div style={{ border: "2px", background: "papayawhip", padding: "1rem" }}>
        Today I am {age} Years of Age
      </div>
      <pre> - click the button below 👇 </pre>
      <button onClick={handleClick}>Get older! </button>
    </div>
  );
};

function UseCallbackDemo() {
  const [age, setAge] = useState(23);
  const handleClick = () => setAge(age + 1);
  const someValue = "someValue";
  const doSomething = useCallback(() => {
    return someValue;
  }, [someValue]);
  return (
    <div>
      <Age age={age} handleClick={handleClick} />
      <Instructions doSomething={doSomething} />
    </div>
  );
}

export default UseCallbackDemo;

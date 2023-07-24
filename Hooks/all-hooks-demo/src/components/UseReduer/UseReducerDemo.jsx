import { useReducer } from "react";

const initializeState = () => ({
  width: 100,
});
// ✅ note how the value returned from the fn above overrides initialState below:
const initialState = { width: 15 };
const reducer = (state, action) => {
  switch (action) {
    case "plus":
      return { width: state.width + 15 };
    case "minus":
      return { width: Math.max(state.width - 15, 2) };
    default:
      throw new Error("what's going on?");
  }
};

const UseReducerDemo = () => {
  const [state, dispatch] = useReducer(reducer, initialState, initializeState);
  return (
    <>
      <div
        style={{ background: "teal", height: "30px", width: state.width }}
      ></div>
      <div style={{ marginTop: "3rem" }}>
        <button onClick={() => dispatch("plus")}>Increase bar size</button>
        <button onClick={() => dispatch("minus")}>Decrease bar size</button>
      </div>
    </>
  );
};

export default UseReducerDemo;

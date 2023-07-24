import React from "react";
import "./App.css";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import UseCallbackDemo from "./components/UsecallBack/UseCallbackDemo";
import UseMemoDemo from "./components/UseMemo/UseMemoDemo";
import UseLayoutEffectDemo from "./components/UseLayoutEffectDemo/UseLayoutEffectDemo";
import UseReducerDemo from "./components/UseReduer/UseReducerDemo";
import UseRefDemo from "./components/UseRef/Useref";
import CustomHookDemo from "./components/CustomHookDemo/CustomHookDemo";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" index element={<UseLayoutEffectDemo />} />
        <Route path="/callback" element={<UseCallbackDemo />} />
        <Route path="/memo" element={<UseMemoDemo />} />
        <Route path="/reducer" element={<UseReducerDemo />} />
        <Route path="/ref" element={<UseRefDemo />} />
        <Route path="/custom-hook" element={<CustomHookDemo />} />
      </Routes>
    </>
  );
}

export default App;

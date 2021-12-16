import React from "react";
import ReactDOM from "react-dom";
import Calculator from "./calculator";

function App() {
  return (
    <div className="App">
      <Calculator />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

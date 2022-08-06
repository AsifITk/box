import { useRef, useState } from "react";
import "./App.css";
import Container from "./components/Container";

function App() {
  let x = 0;

  let [topx, setTopx] = useState(0);

  let [leftx, setLeftx] = useState(0);

  let [rotatex, setRotatex] = useState(0);
  let inputx = useRef(null);
  let inputy = useRef(null);
  let inputr = useRef(null);
  return (
    <div className="app">
      <h1 className="heading">The box</h1>
      <Container topx={topx} leftx={leftx} rotatex={rotatex} />
      <div className="sliders">
        <label for="points">{`X: (${topx}px)`}</label>

        <input
          ref={inputx}
          type="range"
          id="points"
          name="points"
          min="0"
          max="75"
          onChange={(e) => {
            console.log(inputx.current.value);
            setTopx(() => inputx.current.value);
          }}
        />
        <label for="points">{`Y: (${leftx}px)`}</label>

        <input
          ref={inputy}
          type="range"
          id="points"
          name="points"
          min="0"
          max="75"
          onChange={(e) => {
            console.log(inputy.current.value);
            setLeftx(() => inputy.current.value);
          }}
        />
        <label for="points">{`Rotate: (${rotatex}px)`}</label>

        <input
          ref={inputr}
          type="range"
          id="points"
          name="points"
          min="0"
          max="360"
          onChange={(e) => {
            console.log(inputr.current.value);
            setRotatex(() => inputr.current.value);
          }}
        />
      </div>
    </div>
  );
}

export default App;

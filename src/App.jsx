import Display from "./components/Display";
import "./styles/container.css";
import "./styles/global.css";
import Buttons from "./components/Buttons";
import "./styles/numPad.css";
import { useState } from "react";
import { characters, operators } from "./utils/constants";
import "./styles/numbers.css";
import "./styles/operators.css";
import "./styles/equal.css";
import ButtonOp from "./components/ButtonOp";

export default function App() {
  const [currentScreen, setCurrentScreen] = useState("");
  const [prevScreen, setPrevScreen] = useState("");
  const [todoOp, setTodoOp] = useState("");

  function changeTodoOp(val) {
    setTodoOp(val);
    setPrevScreen(currentScreen);
    setCurrentScreen("");
  }
  function equalHandler() {
    if (todoOp == "+") {
      const result = Number(prevScreen) + Number(currentScreen) + "";
    }
  }

  function changeScreenVal(val) {
    setCurrentScreen(currentScreen + val);
    console.log("ajil");
  }
  return (
    <div className="container">
      <Display value={currentScreen} />
      <div className="numPad">
        <div className="numbers">
          {characters.map((num, index) => {
            return (
              <Buttons
                num={num}
                key={index}
                changeScreenVal={changeScreenVal}
              />
            );
          })}
        </div>
        <div>
          <div className="operators">
            {operators.map((val, index) => {
              return (
                <Buttons num={val} key={index} changeTodoOp={changeTodoOp} />
              );
            })}
          </div>
          <div className="equal" onClick={equalHandler}>
            =
          </div>
        </div>
      </div>
    </div>
  );
}

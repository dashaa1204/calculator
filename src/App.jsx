import Display from "./components/Display";
import "./styles/container.css";
import "./styles/global.css";
import Buttons from "./components/Buttons";
import "./styles/numPad.css";
import { useState } from "react";
import { characters, operators, handOp } from "./utils/constants";
import "./styles/numbers.css";
import "./styles/operators.css";
import "./styles/equal.css";
import ButtonOp from "./components/ButtonOp";
import HandOp from "./components/HandOp";
import "./styles/handOp.css";

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
      setCurrentScreen(result);
    } else if (todoOp == "-") {
      const result = Number(prevScreen) - Number(currentScreen) + "";
      setCurrentScreen(result);
    } else if (todoOp == "*") {
      const result = Number(prevScreen) * Number(currentScreen) + "";
      setCurrentScreen(result);
    } else if (todoOp == "/") {
      const restult = Number(prevScreen) / Number(currentScreen) + "";
      setCurrentScreen(restult);
    }
  }

  function changeScreenVal(val) {
    setCurrentScreen(currentScreen + val);
  }
  return (
    <div className="container">
      <Display value={currentScreen} />
      <div className="numPad">
        <div>
          <div className="handOp">
            {handOp.map((value, index) => {
              return <HandOp value={value} key={index} />;
            })}
          </div>
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
        </div>
        <div>
          <div className="operators">
            {operators.map((val, index) => {
              return (
                <ButtonOp value={val} key={index} changeTodoOp={changeTodoOp} />
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

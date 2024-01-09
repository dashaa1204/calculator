import Buttons from "./Buttons";
import "../styles/numPad.css";

let characters = [
  "C",
  "+/-",
  "%",
  "/",
  "7",
  "8",
  "9",
  "*",
  "4",
  "5",
  "6",
  "-",
  "1",
  "2",
  "3",
  "+",
  "0",
  ".",
  "=",
];

export default function Numpad() {
  return (
    <div className="numPad">
      {characters.map((num) => {
        return <Buttons num={num} />;
      })}
    </div>
  );
}

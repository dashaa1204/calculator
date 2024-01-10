import "../styles/buttons.css";
import "../styles/button0.css";
import React from "react";

export default function Buttons({ num, changeScreenVal }) {
  return (
    <div
      className={num == 0 ? "button0" : "buttons"}
      onClick={() => changeScreenVal(num)}
    >
      {num}
    </div>
  );
}

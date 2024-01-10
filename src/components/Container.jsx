import { useState } from "react";
import Display from "./Display";
import Numpad from "./NumPad";

export default function Container() {
  const [value, setValue] = useState("0");
  return (
    <div className="container">
      <Display />
      <Numpad />
    </div>
  );
}

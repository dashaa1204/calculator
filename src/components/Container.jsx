import Display from "./Display";
import Numpad from "./NumPad";

export default function Container() {
  return (
    <div className="container">
      <Display />
      <Numpad />
    </div>
  );
}

import "../styles/buttons.css";
import "../styles/button0.css";

export default function Buttons(props) {
  const num = props.num;
  return (
    <div className={props.num == 0 ? "button0" : "buttons"} key={props.index}>
      {num}
    </div>
  );
}

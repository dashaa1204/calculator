import "../styles/buttons.css";

export default function Buttons(props) {
  const num = props.num;
  return (
    <div className="Buttons" key={props.index}>
      {num}
    </div>
  );
}

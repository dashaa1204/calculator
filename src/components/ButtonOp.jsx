import "../styles/buttons.css";

export default function ButtonOp({ value, changeTodoOp }) {
  return (
    <div
      className="buttons"
      onClick={() => {
        changeTodoOp(value);
      }}
    >
      {value}
    </div>
  );
}

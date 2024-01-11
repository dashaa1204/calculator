import "../styles/rightbuttons.css";

export default function ButtonOp({ value, changeTodoOp }) {
  return (
    <div
      className="rightbuttons"
      onClick={() => {
        changeTodoOp(value);
      }}
    >
      {value}
    </div>
  );
}

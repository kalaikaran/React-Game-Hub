import { useSelector } from "react-redux";
import { RootState } from "../store";

export default function ListTodo() {
  const todo = useSelector((state: RootState) => state.todo);
  const anotherTodo = useSelector((state: RootState) => state.anotherTodo);
  return (
    <div style={{ display: "flex" }}>
      {/* {JSON.stringify(todo)} */}
      <ul>{todo && todo.map((ele, i) => <p key={i}>{ele.name}</p>)}</ul>

      <ul>
        {anotherTodo && anotherTodo.map((ele, i) => <p key={i}>{ele.name}</p>)}
      </ul>
    </div>
  );
}

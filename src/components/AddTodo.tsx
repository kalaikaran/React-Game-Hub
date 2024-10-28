import { FormEvent, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo, TodoState } from "../slices/todoSlice";

function AddTodo() {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const inpRef = useRef(null);
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (text === "") return;
    console.log(inpRef.current);
    const task: TodoState = {
      id: crypto.randomUUID(),
      name: text,
      createdAt: new Date().toISOString(),
      isCompleted: false,
    };
    task.name = text;
    dispatch(addTodo(task));
    setText("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter Task Name!"
        ref={inpRef}
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button id="addTask" type="submit">
        Add Task !
      </button>
    </form>
  );
}

export default AddTodo;

import { useState } from "react";
import "./TodoForm.css";
export default function TodoForm({ addTodo }) {
  const [text, setText] = useState("");
  const handleChange = (e) => {
    setText(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(text);
    setText("");
  };
  return (
    <div className="buttonConatiner">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={handleChange}
          value={text}
          className="inputTodo"
        />
        <button>Add Todo</button>
      </form>
    </div>
  );
}

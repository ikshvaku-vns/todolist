import { useState } from "react";
import TodoItem from "./TodoItem";
import TodoForm from "./TodoForm";
import { v4 as uuid } from "uuid";
import "./TodoList.css";
const inititialTodos = [
  { id: uuid(), text: "walk the dog", completed: false },
  { id: uuid(), text: "walk the cat", completed: true },
  { id: uuid(), text: "walk the fish", completed: false },
  { id: uuid(), text: "walk the bunny", completed: false },
];

export default function TodoList() {
  const [todos, setTodos] = useState(inititialTodos);
  const removeTodo = (id) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((t) => t.id !== id);
    });
  };
  const toggleTodo = (id) => {
    setTodos((prevTodos) => {
      return prevTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        } else {
          return todo;
        }
      });
    });
  };
  const addTodo = (text) => {
    setTodos((prevTodos) => {
      return [...prevTodos, { text: text, id: uuid(), completed: false }];
    });
  };

  return (
    <div>
      <h1>TodoList</h1>
      <ul>
        {todos.map((todo) => (
          <TodoItem
            todo={todo}
            key={todo.id}
            removeTodo={() => removeTodo(todo.id)}
            toggle={() => toggleTodo(todo.id)}
          />
        ))}
      </ul>
      <TodoForm addTodo={addTodo} />
    </div>
  );
}

import "./TodoItem.css";
export default function TodoItem({ todo, removeTodo, toggle }) {
  return (
    <div>
      <li key={todo.id}>
        <input type="checkbox" checked={todo.completed} onChange={toggle} />
        {todo.text} <span onClick={removeTodo}>&times;</span>
      </li>
    </div>
  );
}

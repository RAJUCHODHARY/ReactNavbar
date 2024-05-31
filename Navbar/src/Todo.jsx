import React, { useState } from "react";
import "./Todo.css";

function generateId() {
  return Math.floor(Math.random() * 10);
}

function Todo() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  const [editInput, setEditInput] = useState("");
  const [editId, setEditId] = useState(null);

  const handleSubmit = () => {
    if (editId !== null) {
      // Editing existing todo
      setTodos((prevTodos) =>
        prevTodos.map((todo) =>
          todo.id === editId ? { ...todo, text: editInput } : todo
        )
      );
      setEditId(null);
      setEditInput("");
    } else {
      // Adding new todo
      setTodos((prevTodos) =>
        prevTodos.concat({
          text: input,
          id: generateId(),
        })
      );
      setInput("");
    }
  };

  const removeTodo = (id) =>
    setTodos((todos) => todos.filter((t) => t.id !== id));

  const editTodo = (id, text) => {
    setEditId(id);
    setEditInput(text);
  };

  return (
    <div className="container">
      <input
        type="text"
        value={editId !== null ? editInput : input}
        onChange={(e) => (editId !== null ? setEditInput(e.target.value) : setInput(e.target.value))}
        placeholder="New Todo"
      />

      <button onClick={handleSubmit}>
        {editId !== null ? "Update" : "Submit"}
      </button>

      <ul className="todos-list">
        {todos.map(({ text, id }) => (
          <li key={id} className="todo">
            {editId === id ? (
              <input
                type="text"
                value={editInput}
                onChange={(e) => setEditInput(e.target.value)}
              />
            ) : (
              <span>{text}</span>
            )}
            <div>
            <button onClick={() => editTodo(id, text)}>
              {editId === id ? "Cancel" : "Edit"}
            </button>
            <button className="close" onClick={() => removeTodo(id)}>
              X
            </button></div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;

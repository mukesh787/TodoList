import React, { useState, useEffect } from "react";

function todolist() {
  // component logic goes here;
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos")) || [];
    setTodos(storedTodos);
  }, []);
}
export default todolist;

function addtodo() {
  const todoText = prompt("add a new todo:");
  if (todoText) {
    const newTodo = {
      id: Date.now,
      text: todoText,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  }
}

function deleteTodos(todoId) {
  const updateTodos = todos.filter((item) => item.id !== todoId);
  setTodos(updateTodos);
}
function toggleTodo(todoId) {
  const updatetodos = todos.map((item) => {
    if (item.id == todoId) {
      return { ...item, completed: !item.completed };
    }
  });
  setTodos(updatetodos);
}

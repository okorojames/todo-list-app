import React, { useEffect, useRef, useState } from "react";

const Home = () => {
  // todo-text and total todos initial state
  const [todos, setTodos] = useState([]);
  const [todoText, setTodoText] = useState("");
  // grabbing refrence to form, so i can reset it's state after submiting
  const todoForm = useRef();
  // useffect for getting todos
  useEffect(() => {
    const savedTodos = localStorage.getItem("todos");
    const loadedTodos = JSON.parse(savedTodos);
    if (loadedTodos) {
      setTodos(loadedTodos);
    }
  }, []);
  // useffect for saving todos
  useEffect(() => {
    const saveTodos = JSON.stringify(todos);
    localStorage.setItem("todos", saveTodos);
  }, [todos]);
  // handling the todo form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = {
      id: Math.floor(Math.random() * 900000000),
      text: todoText,
    };
    setTodos([...todos].concat(newTodo));
    // reset form
    todoForm.current.reset();
  };
  //
  // deleting todo function
  const handleDelete = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };
  //
  return (
    <div className="home">
      <form onSubmit={handleSubmit} ref={todoForm}>
        <input
          type="text"
          placeholder="Add Todo"
          onChange={(e) => setTodoText(e.target.value)}
        />
        <button>Add</button>
      </form>
      {/* rendering todos */}
      <div className="todo-lists" style={{ display: "grid", gap: "20px" }}>
        {todos &&
          todos.map((todo) => (
            <div
              className="todo-list"
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
              key={todo.id}
            >
              <div>{todo.text}</div>
              <div
                className="todo-icons"
                style={{ display: "flex", alignItems: "center", gap: "10px" }}
              >
                <i
                  className="ri-close-circle-line"
                  style={{
                    color: "rgb(223, 57, 48)",
                    fontSize: "22px",
                    opacity: ".8",
                  }}
                  onClick={() => handleDelete(todo.id)}
                ></i>
                <i
                  className="ri-edit-box-line"
                  style={{
                    color: "#fff",
                    fontSize: "22px",
                    opacity: ".8",
                  }}
                ></i>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Home;

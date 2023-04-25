import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import UpdateTodo from "./pages/UpdateTodo";

function App() {
  return (
    <BrowserRouter>
      <div className="todo-app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/update/:id" element={<UpdateTodo />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

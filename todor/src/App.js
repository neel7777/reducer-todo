import React, { useState, useReducer } from "react";
import logo from './logo.svg';
import './App.css';
import TodoForm from './TodoForm'
import './Todo.css';

function App() {

  return (
    <div className="App">
      <h1 className="title">Todo List!</h1>
      <TodoForm/>
    </div>
  );

}

export default App;

import React from 'react';
import './App.css';
import todos from './api/todos';
import users from './api/users';
import ToDoList from './components/ToDoList/ToDoList';

const preparedTodos = getTodosWithUsers(todos, users);

function App() {
  return (
    <div className="App">
      <h1>Static list of todos</h1>
      <p>
        <span>Todos: </span>
        {preparedTodos.length}
      </p>
      <ToDoList todos={preparedTodos} />
    </div>
  );
}

function getTodosWithUsers() {
  return todos.map(item => ({
    ...item,
    user: users.find(person => person.id === item.userId),
  }));
}

export default App;

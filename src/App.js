import React from 'react';
import './App.css';
import todos from './api/todos';
import users from './api/users';
import ToDoList from './Components/ToDoList/ToDoList';

function App() {
  const preparedTodos = getTodosWithUsers(todos, users);

  return (
    <div className="App">
      <h1>Static list of todos</h1>
      <ToDoList todos={preparedTodos} />
    </div>
  );
}

function getTodosWithUsers(todosArr, userArr) {
  return todos.map(todo => ({
    ...todo,
    user: users.find(person => person.id === todo.userId),
  }));
}

export default App;

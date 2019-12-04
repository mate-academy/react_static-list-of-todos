import React from 'react';
import './App.css';

import todos from './api/todos';
import users from './api/users';

import TodoList from './TodoList';

const getTodosWithUsers = (toDos, usersArr) => (
  toDos.map((todo) => {
    const user = usersArr.find(person => person.id === todo.userId);

    return { ...todo, user };
  })
);

const preparedTodos = getTodosWithUsers(todos, users);

function App() {
  return (
    <div className="App">
      <h1>Static list of todos</h1>
      <TodoList todos={preparedTodos} />
    </div>
  );
}

export default App;

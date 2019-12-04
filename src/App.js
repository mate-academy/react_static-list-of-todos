import React from 'react';
import './App.css';

import todos from './api/todos';
import users from './api/users';
import TodoList from './TodoList';

function App() {
  const preparedTodos = getTodosWithUsers(todos, users);

  return (
    <div className="App">
      <h1>Static list of todos</h1>
      <TodoList todos={preparedTodos} />
    </div>
  );
}

function getTodosWithUsers(todosArr, usersArr) {
  return todosArr.map((todo) => {
    const user = usersArr.find(item => item.id === todo.userId);

    return { ...todo, user };
  });
}

export default App;

import React from 'react';
import TodoList from './components/TodoList/TodoList';
import './App.css';

import todos from './api/todos';
import users from './api/users';

const usersMap = users
  .reduce((acum, user) => ({ ...acum, [user.id]: user }), {});

function getTodosWithUsers(todosArray) {
  return todosArray.map(todo => ({
    ...todo,
    user: usersMap[todo.userId],
  }));
}

const preparedTodos = getTodosWithUsers(todos, users);

function App() {
  return (
    <div className="App">
      <h1 className="App__title">Static list of todos</h1>
      <TodoList todos={preparedTodos} />
    </div>
  );
}

export default App;

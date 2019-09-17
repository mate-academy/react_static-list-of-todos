import React from 'react';
import './App.css';
import todos from './api/todos';
import users from './api/users';

import TodoList from './component/TodoList/TodoList';

function getTodosWithUsers(todoes, user) {
  return todoes.map(todo => ({
    ...todo,
    user: user.find(item => item.id === todo.userId),
  }));
}

const todosWithUsers = getTodosWithUsers(todos, users);

function App() {
  return (
    <div>
      <h1 className="app">list of todos</h1>
      <TodoList todos={todosWithUsers} />
    </div>
  );
}

export default App;

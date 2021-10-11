import React from 'react';

import { TodoList } from './components/TodoList/TodoList';

import users from './api/users';
import todos from './api/todos';

import { PreparedTodosType } from './types/PreparedTodosType';

import './App.scss';

const preparedTodos: PreparedTodosType[] = todos.map(item => {
  const currentUser = users.find(user => item.userId === user.id) || null;

  return {
    ...item,
    user: currentUser,
  };
});

const App: React.FC = () => {
  return (
    <div className="todo-list">
      <div className="todo-list__column">
        <span className="todo-list__column-item">Name</span>
        <span className="todo-list__column-item">Username</span>
        <span className="todo-list__column-item">Email</span>
        <span className="todo-list__column-item">Description</span>
        <span className="todo-list__column-item">Status</span>
      </div>
      <TodoList todoLists={preparedTodos} />
    </div>
  );
};

export default App;

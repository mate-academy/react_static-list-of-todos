import React from 'react';

import { TodoList } from './components/TodoList/TodoList';

import users from './api/users';
import todos from './api/todos';

import { TodoTypes } from './types/TodoTypes';

import './App.scss';

const App: React.FC = () => {
  const preparedTodos: TodoTypes[] = todos.map(item => {
    const currentUser = users.find(user => item.userId === user.id) || null;

    return {
      ...item,
      user: currentUser,
    };
  });

  return (
    <div className="todo">
      <h1 className="todo__title">Static list of todos</h1>
      <div className="todo__legend">
        <span className="todo__legend-item">Name</span>
        <span className="todo__legend-item">Email</span>
        <span className="todo__legend-item">Description</span>
        <span className="todo__legend-item">Status</span>
      </div>
      <TodoList todoLists={preparedTodos} />
    </div>
  );
};

export default App;

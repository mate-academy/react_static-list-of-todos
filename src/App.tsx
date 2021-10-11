import React from 'react';
import './App.scss';
import { TodoList } from './components/TodoList/TodoList';
import { TodoTypes } from './types/TodoTypes';
import todos from './api/todos';
import users from './api/users';

const preparedTodos: TodoTypes[] = todos.map(item => {
  const userIndex = users.find(({ id }) => item.userId === id) || null;

  return {
    ...item,
    user: userIndex,
  };
});

const App: React.FC = () => {
  return (
    <div className="todo">
      <h1 className="todo__title">Static list of todos</h1>
      <TodoList todoLists={preparedTodos} />
    </div>
  );
};

export default App;

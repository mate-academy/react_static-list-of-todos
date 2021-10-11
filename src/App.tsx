import React from 'react';
import './App.scss';
import { TodoList } from './components/TodoList/Todolist';
import { TodoTypes } from './types/TodoTypes';
import todos from './api/todos';
import users from './api/users';

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
      <h1 className="todo__title">TODOS</h1>
      <div className="todo__header">
        <span className="todo__header-item">Name</span>
        <span className="todo__header-item">Email</span>
        <span className="todo__header-item">Task</span>
        <span className="todo__header-item">Status</span>
      </div>
      <TodoList todos={preparedTodos} />
    </div>
  );
};

export default App;

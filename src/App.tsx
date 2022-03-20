import React from 'react';
import { todos } from './api/todos';
import { users } from './api/users';
import { Todo } from './types/Todo';
import { TodoNavbar } from './components/TodoNavbar';
import { TodoList } from './components/TodoList';
import './App.scss';

function getPreparedTodos(): Todo[] {
  return [...todos].map(untypedTodo => {
    const untypedUser = users[untypedTodo.userId - 1] || null;

    return {
      user: {
        userId: untypedUser.id,
        fullName: untypedUser.name,
        username: untypedUser.username,
        email: untypedUser.email,
      },
      userId: untypedTodo.userId,
      todoId: untypedTodo.id,
      title: untypedTodo.title,
      completed: untypedTodo.completed,
    };
  });
}

export const App: React.FC = () => (
  <div className="app">
    <TodoNavbar />

    <div className="d-flex justify-content-center">
      <TodoList todos={getPreparedTodos()} />
    </div>
  </div>
);

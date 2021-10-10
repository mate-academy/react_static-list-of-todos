import React from 'react';
import './styles/App.scss';
import { TodoList } from './components/TodoList';
import users from './api/users';
import todos from './api/todos';
import { Todo } from './types/todo';

const App: React.FC = () => {
  const preparedTodos: Todo[] = todos.map(item => {
    const currentUser = users.find(user => item.userId === user.id) || null;

    return {
      ...item,
      user: currentUser,
    };
  });

  return (
    <div className="todo-list">
      <h1 className="todo-list__title">Static list of todos</h1>
      <div className="container">
        <span className="
          todo-list__item
          todo-list__item--firstline"
        >
          Name
        </span>
        <span className="
          todo-list__item
          todo-list__item--firstline"
        >
          Email
        </span>
        <span className="
          todo-list__item
          todo-list__item--firstline"
        >
          ToDo
        </span>
        <span className="
          todo-list__item
          todo-list__item--firstline"
        >
          Status
        </span>
      </div>

      <TodoList todoLists={preparedTodos} />
    </div>
  );
};

export default App;

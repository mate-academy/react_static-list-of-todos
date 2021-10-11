import React from 'react';
import './App.scss';

import todos from './api/todos';
import users from './api/users';
import { Todo } from './components/types/Todo';
import { TodoList } from './components/TodoList/TodoList';

const preparedTodos: Todo[] = todos.map((todo) => ({
  ...todo,
  user: users.find(user => user.id === todo.userId) || null,
}));

const App: React.FC = () => (
  <div className="page">
    <h1 className="title">Static list of todos</h1>
    <div className="todo">
      <h2 className="todo__item">
        <div>Fullname</div>
        <div> E-mail</div>
        <div>Target</div>
        <div>Status</div>
      </h2>
      <TodoList todos={preparedTodos} />
    </div>
  </div>
);

export default App;

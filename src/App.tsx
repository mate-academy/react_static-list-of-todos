import React from 'react';
import './App.scss';

import todos from './api/todos';
import users from './api/users';

import { TodoList } from './components/TodoList';
import { Todo } from './types/types';

const preparedTodo: Todo[] = todos.map(todo => ({
  ...todo,
  user: users.find(user => user.id === todo.userId) || null,
}));

const App: React.FC = () => (
  <div className="App">
    <div className="todo">
      <div className="todo__header todo__item">
        <div className="name">name</div>
        <div className="name">email</div>
        <div className="name">task</div>
        <div className="name">status</div>
      </div>
      <TodoList todos={preparedTodo} />
    </div>
  </div>
);

export default App;

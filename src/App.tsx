import React from 'react';
import './App.scss';

import todos from './api/todos';
import users from './api/users';
import { TodoList } from './components/TodoList/TodoList';
import { Todo } from './Types';

const preparedTodos: Todo[] = todos.map((todo) => ({
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
      <TodoList todos={preparedTodos} />
    </div>
  </div>
);

export default App;

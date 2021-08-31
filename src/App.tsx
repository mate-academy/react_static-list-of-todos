import React from 'react';
import { TodoList } from './components/TodoList/todo_list';
import { Todo } from './components/Type/Todo';
import './App.scss';

import todos from './api/todos';
import users from './api/users';

const preparedTodos: Todo[] = [...todos].map((ell) => {
  return {
    ...ell,
    user: users.find((user) => (user.id === ell.userId)) || null,
  };
});

const App: React.FC = () => (
  <div className="App">
    <h1>Static list of todos</h1>
    <ul className="list">
      <TodoList preTodo={preparedTodos} />
    </ul>
  </div>
);

export default App;

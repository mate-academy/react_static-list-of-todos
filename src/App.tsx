import React from 'react';
import './App.scss';

import todos from './api/todos';
import users from './api/users';
import { TodoList } from './components/TodoList/TodoList';
import { Todo } from './types/Todo';

const state: Todo[] = todos.map(todo => ({
  ...todo,
  user: users.find(user => todo.userId === user.id) || null,
}));

const App: React.FC = () => {
  return (
    <>
      <div className="App">
        <h1>Static list of todos</h1>
        <TodoList todoData={state} />
      </div>
    </>
  );
};

export default App;

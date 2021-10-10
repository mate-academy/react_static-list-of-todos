import React from 'react';
import './App.scss';

import todos from './api/todos';
import users from './api/users';
// import { StringLiteralLike } from 'typescript';

import { TodoList } from './Components/TodoList';

import { Todo } from './Types';

const preparedTodos: Todo[] = todos.map(
  todo => {
    const preparedTodo: Todo = {
      ...todo,
      user: (users.find(
        user => user.id === todo.userId,
      )) || null,
    };

    return preparedTodo;
  },
);

const App: React.FC = () => (
  <div className="App">
    <h1 className="App__heading">Static list of todos</h1>
    <TodoList
      prepTD={preparedTodos}
    />
  </div>
);

export default App;

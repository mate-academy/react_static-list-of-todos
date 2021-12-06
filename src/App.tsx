import React from 'react';
import './App.scss';
import { TodoList } from './components/TodoList/TodoList';

import todos from './api/todos';
import users from './api/users';

import { TodoWithUser } from './types/TodoWithUser';
import { User } from './types/User';
import { Todo } from './types/Todo';

function getPreparedTodo(arrOfTodo: Todo[], arrOfUsers: User[]) {
  const findUser = (todo: Todo) => (
    arrOfUsers.find(user => user.id === todo.userId)
  );

  return arrOfTodo.map(todo => {
    return {
      ...todo,
      user: findUser(todo) || null,
    };
  });
}

const preparedTodo: TodoWithUser[] = getPreparedTodo(todos, users);

const App: React.FC = () => (
  <div className="app">
    <h1 className="app__title">Todos</h1>
    <TodoList preparedTodo={preparedTodo} />
  </div>
);

export default App;

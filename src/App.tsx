import React from 'react';
import todos from './api/todos';
import users from './api/users';
import { TodoList } from './components/TodoList/TodoList';
import { Todo, User } from './type/types';

import './App.scss';

const mergeTodosUsers = (todoFromServer: Todo[], userList: User[]) => {
  return todoFromServer.map(todo => ({
    ...todo,
    user: userList.find(user => user.id === todo.userId) || null,
  }));
};

export const preparedTodos = mergeTodosUsers(todos, users);

const App: React.FC = () => (
  <div className="App">
    <h1>Static list of todos</h1>
    <TodoList todoList={preparedTodos} />
  </div>
);

export default App;

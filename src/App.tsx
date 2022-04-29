import React from 'react';
import './App.scss';

import todos from './api/todos';
import users from './api/users';

import { FullTodo, Todo } from './components/types/Todo';
import { TodoList } from './components/TodoList/TodoList';

function preparedTodos(
  todosList: Todo[],
): FullTodo[] {
  return todosList.map((todo) => ({
    ...todo,
    user: users.find(user => user.id === todo.userId) || null,
  }));
}

const prepareTodos = preparedTodos(todos);

const App: React.FC = () => (
  <div className="App">
    <TodoList todos={prepareTodos} />
  </div>
);

export default App;

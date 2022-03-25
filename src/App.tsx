import React from 'react';
import './App.scss';
import { FullTodo, Todo } from './types/types';
import { TodoList } from './components/TodoList/TodoList';

import todos from './api/todos';
import users from './api/users';

function prepareTodos(todosList: Todo[]): FullTodo[] {
  return todosList.map((todo) => ({
    ...todo,
    user: users.find(user => user.id === todo.userId) || null,
  }));
}

const preparedTodos = prepareTodos(todos);

const App: React.FC = () => (
  <div className="App">
    <TodoList todos={preparedTodos} />
  </div>
);

export default App;

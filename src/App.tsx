import React from 'react';
import './App.scss';
import todos from './api/todos';
import users from './api/users';
import TodoList from './components/TodoList/TodoList';
import { Todo } from './types/Todo';

const preparedTodos = todos.map(todo => ({
  ...todo,
  user: users.find(user => user.id === todo.userId) || null,
}));

type Props = {
  preparedTodos: Todo[],
};

const App: React.FC<Props> = () => (
  <div className="App">
    <TodoList preparedTodos={preparedTodos} />
  </div>
);

export default App;

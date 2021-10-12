import React from 'react';
import './App.scss';

import todos from './api/todos';
import users from './api/users';
import { TodoList } from './components/TodoList';
import { Todo } from './types/Type';

const preparedTodos: Todo[] = todos.map(todo => (
  {
    user: users.find(user => (user.id === todo.userId)) || null,
    ...todo,
  }
));

const App: React.FC = () => (
  <>
    <h1 className="MainTitle">Static list of Todos</h1>
    <TodoList todosUsers={preparedTodos} />
  </>
);

export default App;

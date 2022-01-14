import React from 'react';
import 'bulma/css/bulma.min.css';

import todos from './api/todos';
import users from './api/users';

import { TodoList } from './components/TodoList/TodoList';
import { PreparedTodo } from './types/Todo';

const preparedTodos: PreparedTodo[] = todos.map(todo => ({
  ...todo,
  user: users.find(user => todo.id === user.id) || null,
}
));

const App: React.FC = () => (
  <div className="box">
    <h1 className="title">Static list of todos:</h1>
    <TodoList todosList={preparedTodos} />
  </div>
);

export default App;

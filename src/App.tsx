import React from 'react';
import './App.scss';

import todos from './api/todos';
import users from './api/users';
import { TodoList } from './components/TodoList/TodoList';
import { PreparedTodo } from './types/PreparedTodo';

const preparedTodos: PreparedTodo[] = todos.map(todo => {
  return {
    ...todo,
    user: users.find(user => todo.userId === user.id) || null,
  };
});

const App: React.FC = () => (
  <div className="todoApp">
    <TodoList todoList={preparedTodos} />
  </div>
);

export default App;

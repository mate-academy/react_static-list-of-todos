import React from 'react';
import './App.scss';
import { TodoList } from './components/TodoList/TodoList';
import todos from './api/todos';

import users from './api/users';
import { PreparedTodo } from './types/PreparedTodo';

const preparedTodosArr: PreparedTodo[] = todos.map(todo => {
  const user = users.find(person => person.id === todo.userId) || null;

  return { ...todo, user };
});

const App: React.FC = () => (
  <div className="App">
    <TodoList preparedTodos={preparedTodosArr} />
  </div>
);

export default App;

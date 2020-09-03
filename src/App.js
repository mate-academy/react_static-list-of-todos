import React from 'react';
import './App.scss';
import { TodoList } from './components/TodoList';

import todos from './api/todos';
import users from './api/users';

const preparedTodos = todos
  .map((todo) => {
    const userTodo = users.find(user => user.id === todo.userId);

    return {
      ...todo,
      userTodo,
    };
  });

function App() {
  return (
    <TodoList dataList={preparedTodos} />
  );
}

export default App;

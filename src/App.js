import React from 'react';
import './App.css';

import todos from './api/todos';
import users from './api/users';
import { TodoList } from './component/todolist/Todolist';
import { preparedTodosList } from './component/preparedTodosList';

const preparedList = preparedTodosList(todos, users);

const App = () => (
  <div className="App">
    <TodoList preparedTodos={preparedList} />
  </div>
);

export default App;

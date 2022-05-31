import React from 'react';
import './App.scss';
import { TodoList } from './components/TodoList/TodoList';

import todos from './api/todos';
import users from './api/users';
import { PrepearedTodos, Todos } from './types/Todos';
import { Users } from './types/Users';

const prepearingTodos = (todosList : Todos[], usersList : Users[]) => {
  return todosList.map(todo => ({
    ...todo,
    user: usersList.find(user => todo.userId === user.id) || null,
  }));
};

const prepearedTodos: PrepearedTodos[] = prepearingTodos(todos, users);

const App: React.FC = () => (
  <div className="App">
    <h1>Static list of todos</h1>
    <TodoList prepearedTodos={prepearedTodos} />
  </div>
);

export default App;

/*

*/

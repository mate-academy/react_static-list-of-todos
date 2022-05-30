import React from 'react';
import './App.scss';
import { TodoList } from './components/TodoList';

import todos from './api/todos';
import users from './api/users';

const preparedTodosFunction = (
  todosList: Todos,
  userList: Users,
): FullTodos[] => {
  return todosList.map(todo => ({
    ...todo,
    user: userList.find(user => user.id === todo.userId) || null,
  }));
};

const preparedTodos = preparedTodosFunction(todos, users);

const App: React.FC = () => (
  <div className="App">
    <TodoList allList={preparedTodos} />
  </div>
);

export default App;

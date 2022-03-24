import React from 'react';
import './styles/App.scss';

import todos from '../api/todos';
import users from '../api/users';
import { Todo } from '../types/Todo';
import { TodoList } from './TodoList';

const preparedTodos: Todo[] = [];

todos.forEach((currentToDo) => {
  const currentUser = users.find((user) => user.id === currentToDo.userId);
  const toDo: Todo = {
    user: currentUser === undefined ? null : currentUser,
    ...currentToDo,
  };

  preparedTodos.push(toDo);
});

const App: React.FC = () => (
  <div className="App">
    <h1>Static list of todos</h1>
    <div>
      <TodoList listOfToDos={preparedTodos} />
    </div>
  </div>
);

export default App;

import React from 'react';
import './App.scss';

import todos from './api/todos';
import users from './api/users';
import { Todo } from './types/Todo';
import { TodoList } from './components/TodoList/TodoList';

const preparedTodo: Todo[] = [...todos]
  .map((task: Todo) => {
    const prepared = { ...task };

    prepared.user = users.find(person => person.id === prepared.userId) || null;

    return prepared;
  });

const App: React.FC = () => (
  <div className="App">
    <TodoList todos={preparedTodo} />
  </div>
);

export default App;

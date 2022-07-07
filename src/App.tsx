import React from 'react';

import 'bulma/css/bulma.min.css';
import { Heading } from 'react-bulma-components';

import todos from './api/todos';
import users from './api/users';
import { TodoList } from './components/TodoList/TodoList';

const preparedTodos = todos.map(todo => ({
  ...todo,
  user: users.find(
    user => user.id === todo.userId,
  ),
}));

const App: React.FC = () => {
  return (
    <div className="App">
      <Heading className="mt-10" textAlign="center" textTransform="uppercase">
        <h1 className="title">Static list of todos</h1>
      </Heading>
      <TodoList todoList={preparedTodos} />
    </div>
  );
};

export default App;

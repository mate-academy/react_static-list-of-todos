import React from 'react';
import { Segment, Header } from 'semantic-ui-react';
import TodoList from './components/TodoList';
import './App.css';

import todos from './api/todos';
import users from './api/users';

const preparedTodos = todos.map(todo => ({
  ...todo,
  user: users.find(user => user.id === todo.userId),
}));

const App = () => (
  <Segment inverted className="App">
    <Header as="h1" color="olive">
      Static list of todos
    </Header>
    <TodoList list={preparedTodos} />
  </Segment>
);

export default App;

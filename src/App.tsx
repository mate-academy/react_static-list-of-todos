import React from 'react';
import './App.scss';

import todos from './api/todos';
import users from './api/users';
import { TodoList } from './components/Todo/TodoList';

const preparedTodos = todos.map(todo => ({
  ...todo,
  user: users.find(user => user.id === todo.userId) || null,
}));

const App: React.FC = () => (
  <div className="App">
    <div className="list__name">Name</div>
    <div className="list__userName">UserName</div>
    <div className="list__email">Email</div>
    <div className="list__title">Title</div>
    <div className="list__Status">Status</div>

    <TodoList todos={preparedTodos} />
  </div>
);

export default App;

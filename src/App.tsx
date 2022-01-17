import React from 'react';
import './App.scss';

import todos from './api/todos';
import users from './api/users';
import { TodoList } from './components/TodoList/TodoList';

const preparedTodos: Todo[] = todos.map(todo => ({
  ...todo,
  user: users.find(person => person.id === todo.userId) || null,
}));

const App: React.FC = () => {
  // console.log(preparedTodos)
  return (
    <div className="App">
      <TodoList preparedTodos={preparedTodos} />
    </div>
  );
};

export default App;

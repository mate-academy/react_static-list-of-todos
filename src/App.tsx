import React from 'react';
import './App.scss';

import todos from './api/todos';
import users from './api/users';
import { TodoList } from './components/TodoList';
import { Todo } from './types/Todo';
import { User } from './types/User';

 type Props = {
   todos: Todo[];
   user: User | null;
 };

const preparedTodos = todos.map(todo => {
  const user = users.find(person => person.id === todo.userId) || null;

  return { ...todo, user };
});

const App: React.FC<Props> = () => (
  <div className="App">
    <h1>Static list of todos</h1>
    <div>
      <TodoList todos={preparedTodos} />
    </div>
  </div>
);

export default App;

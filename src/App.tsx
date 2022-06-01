import { FC } from 'react';
import './App.scss';

import todos from './api/todos';
import users from './api/users';
import { TodoList } from './components/TodoList';
import { PreparedTodos } from './app.typedefs';

const preparedTodos: PreparedTodos[] = todos.map(todo => (
  {
    ...todo,
    user: users.find(user => todo.userId === user.id) || null,
  }
));

const App: FC = () => (
  <div className="App">
    <TodoList preparedTodos={preparedTodos} />
  </div>
);

export default App;

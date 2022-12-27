import './App.scss';

import todosFromServer from './api/todos';
import usersFromServer from './api/users';

import { User } from './types/User';
import { Todo } from './types/Todo';
import { TodoList } from './components/TodoList';

const findUserById = (userId: number): User | null => (
  usersFromServer.find(user => user.id === userId) || null
);

const todos: Todo[] = todosFromServer.map(todo => ({
  ...todo,
  user: findUserById(todo.userId),
}));

export const App: React.FC = () => (
  <div className="App">
    <h1 className="App__title">Static list of todos</h1>
    <TodoList todos={todos} />
  </div>
);

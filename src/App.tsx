import './App.scss';

import todosFromServer from './api/todos';
import usersFromServer from './api/users';

import { Todo } from './types/Todo';
import { TodoList } from './components/TodoList';

const todos: Todo[] = todosFromServer.map(todo => {
  return {
    ...todo,
    user: usersFromServer[todo.userId - 1],
  };
});

export const App = () => (
  <div className="App">
    <h1 className="App__title">Static list of todos</h1>
    <TodoList todos={todos} />
  </div>
);

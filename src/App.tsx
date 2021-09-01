import './App.scss';
import { TodoList } from './components/TodoList';
import { Todo } from './types/Todo';

import todos from './api/todos';
import users from './api/users';

const preparedTodos: Todo[] = todos.map((todo) => {
  const user = users.find((person) => person.id === todo.userId) || null;

  return { ...todo, user };
});

const App: React.FC = () => (
  <div className="App">
    <h1>Static list of todos</h1>
    <TodoList todos={preparedTodos} />
  </div>
);

export default App;

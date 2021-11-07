import './App.scss';

import todos from './api/todos';
import users from './api/users';
import { TodoList } from './components/TodoList';
import { TodoItem } from './types/TodoItem';

const prepareTodos: TodoItem[] = todos.map(task => ({
  ...task,
  user: users.find(user => user.id === task.userId) || null,
}));

const App: React.FC = () => (
  <div className="App">
    <h1>Static list of todos</h1>
    <TodoList prepareTodos={prepareTodos} />
  </div>
);

export default App;

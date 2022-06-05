import './App.scss';
import { PreparedToDos } from './types/interfaces';

import todos from './api/todos';
import users from './api/users';
import TodoList from './components/TodoList/TodoList';

const preparedTodos: PreparedToDos[] = todos.map(todo => (
  {
    ...todo,
    user: users.find(user => todo.userId === user.id) || null,
  }));

const App: React.FC = () => (
  <div className="App">
    <h1>Static list of todos</h1>
    <TodoList preparedTodos={preparedTodos} />
  </div>
);

export default App;

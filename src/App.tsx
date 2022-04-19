import './App.scss';
import { title } from 'process';
import todos from './api/todos';
import users from './api/users';
import { TodoList } from './components/TodoList';

export const preparedTodos = todos.map(todo => ({
  ...todo,
  user: users.find(user => todo.userId === user.id) || null,
}));

const App = () => (
  <div className="App">
    <h1>Static list of todos</h1>
    <TodoList todos={preparedTodos} title={title} completed={false} />
  </div>
);

export default App;

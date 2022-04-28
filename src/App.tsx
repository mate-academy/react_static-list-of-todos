import { PreparedTodo } from './types/PreparedTodo';
import todos from './api/todos';
import users from './api/users';
import { TodoList } from './components/TodoList';

import './App.scss';

const preparedTodos: PreparedTodo[] = todos.map(todo => (
  {
    ...todo,
    user: (users.find(({ id }) => id === todo.userId)) || null,
  }
));

const App: React.FC = () => (
  <div className="App">
    <TodoList todos={preparedTodos} />
  </div>
);

export default App;

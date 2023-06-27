import './App.scss';

// import cn from 'classnames';
import todosFromServer from './api/todos.json';
import usersFromServer from './api/users.json';
import { TodoList } from './components/TodoList';

function getUserById(userId) {
  return usersFromServer.find(user => user.id === userId)
  || null;
}

export const todos = todosFromServer.map(todo => ({
  ...todo,
  user: getUserById(todo.userId),
}));

export const App = () => (
  <div className="App">
    <h1 className="App__title">Static list of todos</h1>
    <TodoList todos={todos} />
  </div>
);

// const TodoInfo = ({ todo }) => (
//   <li className={cn(
//     'TodoInfo',
//     { 'TodoInfo--completed': todo.completed },
//   )}
//   >
//     <h2 className="TodoInfo__title">{todo.title}</h2>

//     <a className="UserInfo" href="mailto:Sincere@april.biz">
//       {todo.user.name}
//     </a>
//   </li>
// );

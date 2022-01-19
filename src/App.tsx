import React from 'react';
import './App.scss';

import todos from './api/todos';
import users from './api/users';
import { TodoList } from './components/TodoList/TodoList';

export const preparedTodos: Todo[] = todos.map(todo => ({
  ...todo,
  user: users.find((user) => user.id === todo.userId) || null,
}));

const App: React.FC = () => (
  <div className="page">
    <div className="page-content">
      {/* <h1>Static list of todos</h1> */}
      <TodoList todos={preparedTodos} />
    </div>
  </div>
);

export default App;

// {/* <div className="page">
//     <div className="page-content">
//       <MoviesList movies={moviesFromServer} />
//     </div>

//     <div className="sidebar">
//       Sidebar will be here
//     </div>
//   </div> */}

import React from 'react';
import TodoList from './components/TodoList';
import todos from './resources/todos';
import users from './resources/users';


function App() {

  const usersMap = users.reduce((acc, user) => ({ ...acc, [user.id]: user }), {});
  const todosWithUsers = todos.map(todo => ({ ...todo, user: usersMap[todo.userId] }));

  return (
    <table>
      <thead>
        <tr>
          <th>TODO</th>
          <th>Name</th>
          <th>Completed</th>
        </tr>
      </thead>
      <tbody>
        <TodoList todos={todosWithUsers} />
      </tbody>
    </table>
  )
}

export default App;

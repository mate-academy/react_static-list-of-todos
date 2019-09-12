import React from 'react';
import './App.css';
import todos from './api/todos';
import users from './api/users';
import TodoList from './components/TodoList/TodoList';

function getTodosWithUsers(todosParam, usersParam) {
  return todosParam.map(todo => (
    {
      ...todo,
      user: usersParam.find(user => user.id === todo.userId),
    }
  ));
  }
const preparedTodos = getTodosWithUsers(todos, users);
function App() {
  return (
  <TodoList todos = {preparedTodos} />
  )
}
export default App;

import React from 'react';
import './TodoList.css';
import todos from '../../api/todos';
import users from '../../api/users';
import { Todo } from '../Todo/Todo';

const prepTodos = todos.map(todo => ({
  ...todo,
  name: users.find(
    user => (user.id === todo.userId),
  ).name,
}));

export const TodoList = () => (
  <>
    <div className="TodoList">
      <div className="TodoList__N">N</div>
      <div className="TodoList__name">Name</div>
      <div className="TodoList__todo">Todo</div>
      <div className="TodoList__done">Done</div>
    </div>
    {prepTodos.map(todo => (
      <Todo
        key={todo.id}
        {...todo}
      />
    ))}
  </>

);

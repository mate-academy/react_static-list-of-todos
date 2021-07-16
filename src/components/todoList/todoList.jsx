import React from 'react';
import './todo.scss';
import todos from '../../api/todos';
import users from '../../api/users';
import { User } from '../user/user';
import { Todo } from '../todo/todo';

export const TodoList = () => (
  todos.map(todo => (
    <div className="todo__item" key={todo.id}>
      <Todo todo={todo} />
      <User {...users.find(user => user.id === todo.userId)} />
    </div>
  ))
);
